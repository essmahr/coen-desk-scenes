const path = require('path');
const fs = require('fs');
const smartypants = require('smartypants').smartypants;

const { sceneRoute, filmRoute } = require('./src/lib/routes');
const { getNextScene, getPreviousScene } = require('./src/lib/pagination');

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: path.resolve(`./src/pages/home.js`),
  });

  const pages = await graphql(query);

  const { allScenesJson, allFilmsJson } = pages.data;

  const orderedScenes = allFilmsJson.edges.reduce((scenes, { node: film }) => {
    const { slug } = film;

    const filmSceneGroup = allScenesJson.group.find(
      sceneGroup => sceneGroup.fieldValue === slug
    );

    const scenesArray = filmSceneGroup
      ? filmSceneGroup.edges.map(({ node: scene }) => {
          return {
            ...scene,
            film: slug,
          };
        })
      : [];
    return [...scenes, ...scenesArray];
  }, []);

  for (let index = 0; index < orderedScenes.length; index++) {
    const currentScene = orderedScenes[index];
    const nextScene = getNextScene(orderedScenes, index);
    const previousScene = getPreviousScene(orderedScenes, index);

    const { timestamp, film, id } = currentScene;

    createPage({
      path: sceneRoute(currentScene),
      component: path.resolve(`./src/pages/scene.js`),
      context: {
        id,
        timestamp,
        film,
        index,
        pagination: {
          previous: sceneRoute(previousScene),
          next: sceneRoute(nextScene),
        },
      },
    });
  }
};
