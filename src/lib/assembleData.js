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

export default function assembleData({ allFilmsJson, allScenesJson }) {
  const films = allFilmsJson.edges.map(({ node }) => node);
  const allScenes = allScenesJson.group;

  return {
    films,
    scenes: films.reduce(
      (scenesArray, film) => [
        ...scenesArray,
        ...getScenesForFilm(allScenes, film),
      ],
      []
    ),
  };
}
