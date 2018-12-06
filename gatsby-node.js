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
    allScenesJson {
      edges {
        node {
          timestamp
          film
          quote
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: path.resolve(`./src/pages/index.js`),
  });

  return graphql(query)
    .then(pages => {
      const { allScenesJson } = pages.data;

      allScenesJson.edges.forEach(({ node: scene }) => {
        const { timestamp, film } = scene;

        createPage({
          path: sceneRoute(scene),
          component: path.resolve(`./src/pages/scene.js`),
          context: {
            timestamp,
            film,
          },
        });
      });
    })
    .catch(console.error);
};
