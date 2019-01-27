// @flow

export const TRANSITIONS = {
  ROOT_ROOT: 'root-to-root',
  ROOT_SCENE: 'root-to-scene',
  SCENE_ROOT: 'scene-to-root',
  INCREMENT: 'scene-increment',
  DECREMENT: 'scene-decrement',
};

export function getTransitionTypeForRender(
  props: Object,
  state: Object
): null | {} {
  const currentPanel = state.currentSceneIndex;
  const nextPanel = props.sceneIndex;

  const navigatingToRoot = nextPanel === null;
  const navigatingFromRoot = currentPanel === null;
  let transitionType = null;

  if (navigatingToRoot && navigatingFromRoot) {
    transitionType = TRANSITIONS.ROOT_ROOT;
  }

  if (navigatingToRoot && !navigatingFromRoot) {
    transitionType = TRANSITIONS.SCENE_ROOT;
  }

  if (!navigatingToRoot && navigatingFromRoot) {
    transitionType = TRANSITIONS.ROOT_SCENE;
  }

  if (!transitionType && nextPanel < currentPanel) {
    transitionType = TRANSITIONS.DECREMENT;
  }

  if (!transitionType && nextPanel > currentPanel) {
    transitionType = TRANSITIONS.INCREMENT;
  }

  return transitionType
    ? {
        currentSceneIndex: nextPanel,
        transitionType,
      }
    : null;
}
