const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const smartypants = require('smartypants').smartypants;

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

const getImageName = (film, scene) => {
  const { timestamp } = scene;
  const { slug } = film;
  const timestampKey = timestamp.split(':').join('.');

  return `${slug}_${timestampKey}`;
};

const getImageIDForScene = (images, imageName) => {
  const image = images.find(({ name }) => name === imageName);

  if (!image) {
    console.warn('image node not found', imageName);
    return;
  }

  return image.id;
};

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

exports.sourceNodes = ({ actions, getNodesByType }) => {
  const { createNode } = actions;

  const images = getNodesByType('File');

  filmsJson.forEach(film => {
    const filmNode = makeFilmNode(film);
    const filmScenes = getScenesForFilm(scenesJson, film);

    filmScenes.sort(byTimestamp).forEach(scene => {
      const sceneNode = makeSceneNode(scene, filmNode);

      const imageName = getImageName(filmNode, sceneNode);
      sceneNode.image___NODE = getImageIDForScene(images, imageName);

      filmNode.scenes___NODE.push(sceneNode.id);
      createNode(sceneNode);
    });

    createNode(filmNode);
  });
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
          id
          timestamp
          film {
            slug
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

  const results = await graphql(query);

  const orderedScenes = results.data.allFilm.nodes.reduce(
    (acc, { scenes }) => acc.concat(scenes),
    []
  );

  for (let index = 0; index < orderedScenes.length; index++) {
    const currentScene = orderedScenes[index];
    const nextScene = getNextScene(orderedScenes, index);
    const previousScene = getPreviousScene(orderedScenes, index);

    const { timestamp, film, id, image } = currentScene;

    createPage({
      path: sceneRoute(currentScene),
      component: path.resolve(`./src/pages/scene.js`),
      context: {
        id,
        timestamp,
        film: film.slug,
        index,
        pagination: {
          previous: sceneRoute(previousScene),
          next: sceneRoute(nextScene),
        },
      },
    });
  }
};
