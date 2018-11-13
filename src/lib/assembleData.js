// @flow
import {
  type Film,
  type Scene,
  type SceneGroup,
  type ScenesJson,
  type FilmsJson,
} from '../types';

function getScenesForFilm(
  allScenes: Array<SceneGroup>,
  film: Film
): Array<Scene> {
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
function getIndexForScene(scenes: Array<Scene>, scene: Scene) {
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

export default function assembleData(
  {
    allFilmsJson,
    allScenesJson,
  }: {
    allFilmsJson: FilmsJson,
    allScenesJson: ScenesJson,
  },
  scene: Scene
): { films: Array<Film> } {
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
