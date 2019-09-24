function filmRoute(film) {
  return `/film/${film.slug}`;
}

function sceneRoute(scene) {
  const { film, timestamp } = scene;
  return `/film/${film.slug}/at/${timestamp}`;
}

module.exports = {
  sceneRoute,
  filmRoute,
};
