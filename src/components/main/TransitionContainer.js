// @flow
import * as React from 'react';
import styled from '@emotion/styled';
import { useTransition, animated, config } from 'react-spring';

const TransitionParent = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TransitionPanel = animated(TransitionParent);

type Props = {
  children: React.ChildrenArray<React.Node>,
  location: string,
  sceneIndex: ?number,
};

const TransitionContainer = (props: Props) => {
  const { children, location } = props;

  const transitions = useTransition(children, location, {
    from: {
      transform: 'translateY(10%)',
      opacity: 0,
    },
    enter: () => async next => {
      setTimeout(() => {
        next({ opacity: 1, transform: 'translateY(0)' });
      }, 600);
    },
    leave: { opacity: 0, transform: 'translateY(-10%)' },
    config: config.stiff,
  });

  return (
    <TransitionParent>
      {transitions.map(({ item, key, props }) => (
        <TransitionPanel key={key} style={props}>
          {item}
        </TransitionPanel>
      ))}
    </TransitionParent>
  );
};

export default React.memo(TransitionContainer);
