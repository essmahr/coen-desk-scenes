import * as React from 'react';
import { css } from 'emotion';

function Main({ children }: React.ChildrenArray<React.Node>) {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: calc(100% - 400px);
      `}
    >
      {children}
    </div>
  );
}

export default Main;