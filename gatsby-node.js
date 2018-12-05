const path = require('path');
const fs = require('fs');
const { sceneRoute, filmRoute } = require('./src/lib/routes');

function getScenesForFilm(allScenesJson, film) {
  const filmScenes = allScenesJson.edges.filter(({ node: scene }) => {
    return scene.film === film.slug;
  });

  return filmScenes
    ? filmScenes.map(({ node: scene }) => ({
        ...scene,
        film,
      }))
    : [];
}

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'ScenesJson') {
    return;
  }

  const timestamp = node.timestamp.split(':').join('.');
  const imagePath = `/images/${node.film}_${timestamp}.jpeg`;
  const imageExists = fs.existsSync(path.join(__dirname, 'src', imagePath));

  if (imageExists) {
    actions.createNodeField({
      node,
      name: 'image',
      value: path.join('..', imagePath),
    });
  } else {
    console.error(`\nimage not found at ${imagePath}`);
  }
};

const query = `
  {
    allFilmsJson(sort: { fields: [year], order: ASC }) {
      edges {
        node {
          slug
          title
          year
        }
      }
    },
    allScenesJson {
      edges {
        node {
          timestamp
          film
          quote
          fields {
            thumbnail: image {
              childImageSharp {
                small: fixed(width: 300, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(query)
    .then(pages => {
      const { allFilmsJson, allScenesJson } = pages.data;

      allFilmsJson.edges.forEach(({ node: film }) => {
        createPage({
          path: filmRoute(film),
          component: path.resolve(`./src/pages/index.js`),
          context: {
            film: film.slug,
          },
        });

        const filmScenes = getScenesForFilm(allScenesJson, film);

        filmScenes.forEach(scene => {
          createPage({
            path: sceneRoute(scene),
            component: path.resolve(`./src/pages/index.js`),
            context: {
              scene,
            },
          });
        });
      });
    })
    .catch(console.error);
};
