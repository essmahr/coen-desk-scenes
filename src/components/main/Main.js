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

function Main({ children }: React.ChildrenArray<React.Node>) {
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
      <MiniHeader />
      {children}
    </div>
  );
}

export default Main;
