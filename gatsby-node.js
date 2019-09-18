const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const smartypants = require('smartypants').smartypants;

console.log('welcome');

const filmsJson = require('./src/data/films');
const scenesJson = require('./src/data/scenes');

const { sceneRoute, filmRoute } = require('./src/lib/routes');
const { getNextScene, getPreviousScene } = require('./src/lib/pagination');

const createHash = string =>
  crypto
    .createHash('md5')
    .update(string)
    .digest('hex');

const createContentDigest = data =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(data))
    .digest('hex');

const getScenesForFilm = (scenes, film) =>
  scenes.filter(scene => scene.film === film.slug);

const makeSceneNode = (scene, filmNode) => {
  const { timestamp, quote, actor, film, imdbId, multiple } = scene;
  return {
    id: createHash(`${filmNode.slug}${timestamp}`),
    timestamp,
    quote,
    formattedQuote: smartypants(quote, 1),
    actor,
    imdbId,
    multiple,
    film___NODE: filmNode.id,
    internal: {
      type: 'scene',
      contentDigest: createContentDigest(scene),
      mediaType: 'application/json',
    },
  };
};

const makeFilmNode = film => {
  const { title, slug, year } = film;
  return {
    id: createHash(slug),
    title,
    slug,
    year,
    scenes___NODE: [],
    internal: {
      type: 'film',
      contentDigest: createContentDigest(film),
      mediaType: 'application/json',
    },
  };
};

const byTimestamp = (a, b) => (a.timestamp > b.timestamp ? 1 : -1);

exports.sourceNodes = ({ actions }) => {
  const { createNode } = actions;

  filmsJson.forEach(film => {
    const filmNode = makeFilmNode(film);
    const filmScenes = getScenesForFilm(scenesJson, film);

    filmScenes.sort(byTimestamp).forEach(scene => {
      const sceneNode = makeSceneNode(scene, filmNode);

      filmNode.scenes___NODE.push(sceneNode.id);
      createNode(sceneNode);
    });

    createNode(filmNode);
  });
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'scene') {
    return;
  }
  const { film, timestamp, quote } = node;

  const { createNodeField } = actions;
  const timestampKey = timestamp.split(':').join('.');
  const imagePath = `/images/${node.internal.filmSlug}_${timestampKey}.jpeg`;
  const imageExists = fs.existsSync(path.join(__dirname, 'src', imagePath));
  if (imageExists) {
    console.log('creating field');

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
    allFilm(sort: { fields: year }) {
      nodes {
        slug
        scenes {
          timestamp
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

  const { allFilm } = pages.data;

  const orderedScenes = allFilm.nodes.reduce(
    (acc, { scenes }) => acc.concat(scenes),
    []
  );

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
