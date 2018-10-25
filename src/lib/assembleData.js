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
  const films = allFilmsJson.edges.map(({ node }) => node);
  const allScenes = allScenesJson.group;
  const scenes = films.reduce(
    (scenesArray, film) => [
      ...scenesArray,
      ...getScenesForFilm(allScenes, film),
    ],
    []
  );

  return {
    films,
    scenes,
    currentSceneIndex: getIndexForScene(scenes, scene),
  };
}
