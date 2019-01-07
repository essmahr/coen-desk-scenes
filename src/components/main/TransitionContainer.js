// @flow
import * as React from 'react';
import styled from 'react-emotion';
import { Transition, TransitionGroup } from 'react-transition-group';

import { getTransitionTypeForRender } from '../../lib/transition-helpers';

const TransitionParent = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TransitionPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.5s ease;
  opacity: 0;
`;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};

type Props = {
  children: React.ChildrenArray<React.Node>,
  location: string,
  sceneIndex: ?number,
};

type State = {
  panelKey: ?number,
  transitionType: ?string,
};

class TransitionContainer extends React.Component<Props, State> {
  state = {
    panelKey: null,
    transitionType: null,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    return getTransitionTypeForRender(props, state);
  }

  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup component={TransitionParent}>
        <Transition unmountOnExit timeout={0} key={location}>
          {state => (
            <TransitionPanel css={transitionStyles[state]}>
              {children}
            </TransitionPanel>
          )}
        </Transition>
      </TransitionGroup>
    );
  }
}

export default TransitionContainer;
