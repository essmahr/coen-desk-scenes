const path = require('path');
const fs = require('fs');
const { sceneRoute, filmRoute } = require('./src/lib/routes');

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
    allFilmsJson {
      edges {
        node {
          slug
        }
      }
    },
    allScenesJson {
      edges {
        node {
          timestamp
          film
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

      allFilmsJson.edges.forEach(({ node }) => {
        createPage({
          path: filmRoute(node),
          component: path.resolve(`./src/pages/index.js`),
          context: {
            film: node.slug,
          },
        });
      });

      allScenesJson.edges.forEach(({ node }) => {
        createPage({
          path: sceneRoute(node),
          component: path.resolve(`./src/pages/index.js`),
          context: {
            timestamp: node.timestamp,
          },
        });
      });
    })
    .catch(console.log);
};
