const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const smartypants = require('smartypants').smartypants;

console.log('welcome');

const filmsJson = require('./src/data/films');
const scenesJson = require('./src/data/films');

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
  const { timestamp, quote, actor, imdbId, multiple } = scene;
  return {
    id: createHash(`${filmNode.slug}${timestamp}`),
    timestamp,
    quote,
    formattedQuote: smartypants(quote, 1),
    actor,
    imdbId,
    multiple,
    film__NODE: filmNode.id,
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
    scenes__NODE: [],
    internal: {
      type: 'film',
      contentDigest: createContentDigest(film),
      mediaType: 'application/json',
    },
  };
};

exports.sourceNodes = ({ actions }) => {
  console.log('HELP');

  const { createNode } = actions;

  filmsJson.forEach(film => {
    const filmNode = makeFilmNode(film);
    const filmScenes = getScenesForFilm(scenesJson, film);

    filmScenes.forEach(scene => {
      const sceneNode = makeSceneNode(scene, filmNode);
      filmNode.scenes__NODE.push(sceneNode.id);
      createNode(sceneNode);
    });

    createNode(filmNode);
  });
};

exports.onCreateNode = ({ node, actions }, done) => {
  console.log('HELLO');

  if (node.internal.type !== 'scene') {
    return;
  }

  const { film, timestamp, quote } = node;
  const { createNodeField } = actions;

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
  console.log('create page');

  if (page.path === '/scene/') {
    actions.deletePage(page);
  }
};

const query = `
  {
    films(sort: { fields: year }) {
      edges {
        node {
          slug
        }
      }
    }
    scenes(sort:{ fields: timestamp, order: ASC }) {
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
