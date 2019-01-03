import * as React from 'react';
import styled, { css } from 'react-emotion';

import MiniHeader from '../MiniHeader';
import TransitionContainer from './TransitionContainer';
import { mediaQueries, sidebarWidths } from '../../lib/styles';

const responsiveWidths = mediaQueries.reduce((style, query, index) => {
  if (sidebarWidths[index]) {
    style[query] = {
      width: `calc(100% - ${sidebarWidths[index]})`,
    };
  }

  return style;
}, {});

type MainProps = {
  children: React.ChildrenArray<React.Node>,
  location: string,
};

function Main({ children, isRoot, location }: MainProps) {
  return (
    <div
      css={[
        css`
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
        `,
        css(responsiveWidths),
      ]}
    >
      <MiniHeader visible={location !== '/'} />
      <TransitionContainer location={location}>{children}</TransitionContainer>
    </div>
  );
}

export default Main;
