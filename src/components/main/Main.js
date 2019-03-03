// @flow
import * as React from 'react';
import styled from 'styled-components';
import MiniHeader from '../MiniHeader';
import TransitionContainer from './TransitionContainer';
import { mediaQueries, sidebarWidths } from '../../lib/styles';

const Fixed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const responsiveWidths = mediaQueries.reduce((style, query, index) => {
  if (sidebarWidths[index]) {
    style[query] = {
      width: `calc(100% - ${sidebarWidths[index]})`,
    };
  }

  return style;
}, {});

function Main({
  children,
  location,
  sceneIndex,
}: {
  children: React.ChildrenArray<React.Node>,
  location: string,
  sceneIndex: number | null,
}) {
  return (
    <Fixed css={responsiveWidths}>
      <MiniHeader visible={location !== '/'} />
      <TransitionContainer location={location} sceneIndex={sceneIndex}>
        {children}
      </TransitionContainer>
    </Fixed>
  );
}

export default Main;
