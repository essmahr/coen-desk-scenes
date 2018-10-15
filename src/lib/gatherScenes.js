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

export default function gatherScenes({ allFilmsJson, allScenesJson }) {
  const films = allFilmsJson.edges.map(({ node }) => node);
  const allScenes = allScenesJson.group;

  return films.reduce(
    (scenesArray, film) => [
      ...scenesArray,
      ...getScenesForFilm(allScenes, film),
    ],
    []
  );
}
