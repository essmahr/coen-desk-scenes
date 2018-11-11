function getScenesForFilm(allScenes, film) {
  const filmScenes = allScenes.find(scene => {
    return scene.fieldValue === film.slug;
  });

  return filmScenes
    ? filmScenes.edges.map(({ node }) => ({
        ...node,
        film,
      }))
    : [];
}

// eslint-disable-next-line
function getIndexForScene(scenes, scene) {
  if (!scene) return null;

  for (let index = 0; index < scenes.length; index++) {
    const currentScene = scenes[index];
    if (
      scene.timestamp === currentScene.timestamp &&
      scene.film === currentScene.film.slug
    ) {
      return index;
    }
  }

  return null;
}

export default function assembleData({ allFilmsJson, allScenesJson }, scene) {
  const allScenes = allScenesJson.group;
  const films = allFilmsJson.edges
    .map(({ node }) => node)
    .reduce((scenesArray, film) => {
      scenesArray.push({
        ...film,
        scenes: getScenesForFilm(allScenes, film),
      });

      return scenesArray;
    }, []);

  return {
    films,
    // currentSceneIndex: getIndexForScene(films, scene),
  };
}
