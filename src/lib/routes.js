function filmRoute(film) {
  return `/film/${film.slug}`;
}

function sceneRoute(scene) {
  const { film, timestamp } = scene;

  const slug = typeof film === 'object' ? film.slug : film;

  return `/film/${slug}/at/${timestamp}`;
}

module.exports = {
  sceneRoute,
  filmRoute,
};
