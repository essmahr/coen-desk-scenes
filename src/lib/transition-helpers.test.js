import { getTransitionTypeForRender, TRANSITIONS } from './transition-helpers';

describe('transition helpers', () => {
  it('handles non-scene to non-scene', () => {
    const oldState = { currentSceneIndex: null };
    const newProps = { sceneIndex: null };

    const { currentSceneIndex, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(currentSceneIndex).toEqual(null);
    expect(transitionType).toEqual(TRANSITIONS.ROOT_ROOT);
  });

  it('handles non-scene to scene', () => {
    const oldState = { currentSceneIndex: null };
    const newProps = { sceneIndex: 6 };

    const { currentSceneIndex, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(currentSceneIndex).toEqual(6);
    expect(transitionType).toEqual(TRANSITIONS.ROOT_SCENE);
  });

  it('handles scene to non-scene', () => {
    const oldState = { currentSceneIndex: 6 };
    const newProps = { sceneIndex: null };

    const { currentSceneIndex, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(currentSceneIndex).toEqual(null);
    expect(transitionType).toEqual(TRANSITIONS.SCENE_ROOT);
  });

  it('handles scene incrementing', () => {
    const oldState = { currentSceneIndex: 6 };
    const newProps = { sceneIndex: 7 };

    const { currentSceneIndex, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(currentSceneIndex).toEqual(7);
    expect(transitionType).toEqual(TRANSITIONS.INCREMENT);
  });

  it('handles scene decrementing', () => {
    const oldState = { currentSceneIndex: 7 };
    const newProps = { sceneIndex: 6 };

    const { currentSceneIndex, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(currentSceneIndex).toEqual(6);
    expect(transitionType).toEqual(TRANSITIONS.DECREMENT);
  });

  it('skips a render on no change', () => {
    const oldState = { currentSceneIndex: 7 };
    const newProps = { sceneIndex: 7 };

    expect(getTransitionTypeForRender(newProps, oldState)).toEqual(null);
  });
});
