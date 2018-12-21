import * as React from 'react';
import { css } from 'emotion';

import MiniHeader from '../MiniHeader';
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
  isRoot: boolean,
};

function Main({ children, isRoot }: MainProps) {
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
      <MiniHeader visible={!isRoot} />
      {children}
    </div>
  );
}

export default Main;
