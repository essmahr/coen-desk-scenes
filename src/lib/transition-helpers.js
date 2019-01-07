// @flow

export function getTransitionTypeForRender(
  props: Object,
  state: Object
): null | {} {
  const prevPanel = state.panelKey;
  const nextPanel = props.sceneIndex;

  const navigatingToRoot = nextPanel === null;
  const navigatingFromRoot = prevPanel === null;

  const newState = {
    panelKey: nextPanel,
  };

  let transitionType = null;

  if (navigatingToRoot && navigatingFromRoot) {
    transitionType = 'root-to-root';
  }

  if (navigatingToRoot && !navigatingFromRoot) {
    transitionType = 'scene-to-root';
  }

  if (!navigatingToRoot && navigatingFromRoot) {
    transitionType = 'root-to-scene';
  }

  if (!transitionType && nextPanel < prevPanel) {
    transitionType = 'scene-decrement';
  }

  if (!transitionType && nextPanel > prevPanel) {
    transitionType = 'scene-increment';
  }

  return transitionType
    ? {
        panelKey: nextPanel,
        transitionType,
      }
    : null;
}
