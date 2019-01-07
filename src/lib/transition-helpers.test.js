import { getTransitionTypeForRender } from './transition-helpers';

describe('transition helpers', () => {
  it('handles non-scene to non-scene', () => {
    const oldState = { panelKey: null };
    const newProps = { sceneIndex: null };

    const { panelKey, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(panelKey).toEqual(null);
    expect(transitionType).toEqual('root-to-root');
  });

  it('handles non-scene to scene', () => {
    const oldState = { panelKey: null };
    const newProps = { sceneIndex: 6 };

    const { panelKey, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(panelKey).toEqual(6);
    expect(transitionType).toEqual('root-to-scene');
  });

  it('handles scene to non-scene', () => {
    const oldState = { panelKey: 6 };
    const newProps = { sceneIndex: null };

    const { panelKey, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(panelKey).toEqual(null);
    expect(transitionType).toEqual('scene-to-root');
  });

  it('handles scene incrementing', () => {
    const oldState = { panelKey: 6 };
    const newProps = { sceneIndex: 7 };

    const { panelKey, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(panelKey).toEqual(7);
    expect(transitionType).toEqual('scene-increment');
  });

  it('handles scene decrementing', () => {
    const oldState = { panelKey: 7 };
    const newProps = { sceneIndex: 6 };

    const { panelKey, transitionType } = getTransitionTypeForRender(
      newProps,
      oldState
    );

    expect(panelKey).toEqual(6);
    expect(transitionType).toEqual('scene-decrement');
  });

  it('skips a render on no change', () => {
    const oldState = { panelKey: 7 };
    const newProps = { sceneIndex: 7 };

    expect(getTransitionTypeForRender(newProps, oldState)).toEqual(null);
  });
});
