// @flow

import React from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';

import usePrevious from '../../lib/usePrevious';

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

const isRoot = index => {
  return index === null || typeof index === 'undefined';
};

const getTranslateForItem = ({ index }, lastIndex, mode) => {
  const comingFromRoot = isRoot(lastIndex);
  const goingToRoot = isRoot(index);

  if (comingFromRoot && goingToRoot) {
    return 'translate3d(0px, 0px, 0px)';
  }

  if (comingFromRoot) {
    return 'translate3d(20px, 0px, 0px)';
  }

  if (goingToRoot) {
    return 'translate3d(-20px, 0px, 0px)';
  }

  if (index > lastIndex) {
    return 'translate3d(0px, 20px, 0px)';
  }

  if (index < lastIndex) {
    return 'translate3d(0px, -20px, 0px)';
  }
};

const TransitionContainer = (props: Props) => {
  const { children, location, sceneIndex } = props;
  const previousIndex = usePrevious(sceneIndex);

  const items = React.Children.map(children, child => {
    return {
      index: child.props.pageContext.index,
      element: child,
    };
  });

  const transitions = useTransition(items, location, {
    from: item => ({
      opacity: 0,
      transform: getTranslateForItem(item, previousIndex, 'from'),
    }),
    enter: () => async next => {
      setTimeout(async () => {
        await next({
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0px)',
        });
      }, 400);
    },
    leave: item => ({
      opacity: 0,
      transform: getTranslateForItem(item, sceneIndex, 'leave'),
    }),
  });

  return (
    <TransitionParent>
      {transitions.map(({ item, key, props }) => (
        <TransitionPanel key={key} style={props}>
          {item.element}
        </TransitionPanel>
      ))}
    </TransitionParent>
  );
};

export default React.memo(TransitionContainer);
