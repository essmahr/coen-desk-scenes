const path = require('path');
const fs = require('fs');
const smartypants = require('smartypants').smartypants;

const { sceneRoute, filmRoute } = require('./src/lib/routes');

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'ScenesJson') {
    return;
  }

  const { film, timestamp, quote } = node;
  const { createNodeField } = actions;

  createNodeField({
    node,
    name: 'formattedQuote',
    value: smartypants(quote, 1),
  });

  const timestampKey = timestamp.split(':').join('.');
  const imagePath = `/images/${film}_${timestampKey}.jpeg`;
  const imageExists = fs.existsSync(path.join(__dirname, 'src', imagePath));

  if (imageExists) {
    createNodeField({
      node,
      name: 'image',
      value: path.join('..', imagePath),
    });
  } else {
    console.error(`\nimage not found at ${imagePath}`);
  }
};

exports.onCreatePage = ({ page, actions }) => {
  if (page.path === '/scene/') {
    actions.deletePage(page);
  }
};

const query = `
  {
    allFilmsJson(sort: { fields: year }) {
      edges {
        node {
          slug
        }
      }
    }
    allScenesJson(sort:{ fields: timestamp, order: ASC }) {
      group(field: film) {
        fieldValue
        edges {
          node {
            id
            timestamp
            quote
            actor
            imdbId
            multiple
          }
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: path.resolve(`./src/pages/home.js`),
  });

  return graphql(query)
    .then(pages => {
      const { allScenesJson, allFilmsJson } = pages.data;
      let counter = 0;

      const orderedScenes = allFilmsJson.edges.reduce(
        (scenes, { node: film }) => {
          const { slug } = film;

          const filmSceneGroup = allScenesJson.group.find(
            sceneGroup => sceneGroup.fieldValue === slug
          );

          const scenesArray = filmSceneGroup
            ? filmSceneGroup.edges.map(({ node: scene }) => {
                counter++;

                return {
                  ...scene,
                  film: slug,
                  index: counter,
                };
              })
            : [];
          return [...scenes, ...scenesArray];
        },
        []
      );

      orderedScenes.forEach(scene => {
        const { timestamp, film, index, id } = scene;

        createPage({
          path: sceneRoute(scene),
          component: path.resolve(`./src/pages/scene.js`),
          context: {
            id,
            timestamp,
            film,
            index,
          },
        });
      });
    })
    .catch(console.error);
};
