// @flow
import * as React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  getTransitionTypeForRender,
  TRANSITIONS,
} from '../../lib/transition-helpers';

import sceneTransitions from './ScenePanel/transitions';
import { landerTransitions } from './Lander';

export const transitions = `
  ${sceneTransitions}
  ${landerTransitions}
`;

const TransitionParent = styled('div')`
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TransitionPanel = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${transitions};
`;

type Props = {
  children: React.ChildrenArray<React.Node>,
  location: string,
  sceneIndex: ?number,
};

type State = {
  currentSceneIndex: ?number,
  transitionType: string,
};

class TransitionContainer extends React.Component<Props, State> {
  state = {
    currentSceneIndex: null,
    transitionType: TRANSITIONS.ROOT_ROOT,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    return getTransitionTypeForRender(props, state);
  }

  render() {
    const { children, location } = this.props;
    const { transitionType } = this.state;

    return (
      <TransitionGroup className={transitionType} component={TransitionParent}>
        <CSSTransition timeout={1200} key={location} classNames="panel">
          <TransitionPanel>{children}</TransitionPanel>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default TransitionContainer;
