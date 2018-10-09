import React from 'react';
import styled, { css } from 'react-emotion';

import { gutter } from '../lib/styles';

const GridItem = ({ children }) => {
  return (
    <div
      className={css`
        flex: 0 0 33%;
      `}
    >
      {children}
    </div>
  );
};

export const Grid = ({ children }) => {
  return (
    <div
      className={css`
        margin: 0 ${gutter(-2)};
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {children.map(child => (
        <GridItem>{child}</GridItem>
      ))}
    </div>
  );
};

export const Container = ({ component = 'div', ...props }) => {
  const Component = styled(component)`
    max-width: 1200px;
    padding: 0 ${gutter()};
    margin: auto;
  `;

  return <Component {...props} />;
};
