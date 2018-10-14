import React from 'react';
import styled, { css } from 'react-emotion';

import { mqs } from '../lib/styles';

function flexGridItem(columns, percent, outerPadding) {
  const context = 100 - outerPadding * 2;
  const percentInContext = (percent / context) * 100;
  const basis = (100 - percentInContext * (columns - 1)) / columns;

  return {
    flex: `0 0 ${basis}%`,
    marginBottom: `${percentInContext}%`,

    [`&:not(:nth-child(${columns}n))`]: {
      marginRight: `${percentInContext}%`,
    },
  };
}

const GridItem = ({ children }) => {
  return (
    <div
      className={css({
        [mqs[0]]: flexGridItem(2, 5, 6),
        [mqs[1]]: flexGridItem(3, 5, 6),
        [mqs[2]]: flexGridItem(3, 7, 6),
      })}
    >
      {children}
    </div>
  );
};

export const Grid = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {children.map(child => (
        <GridItem key={child.key}>{child}</GridItem>
      ))}
    </div>
  );
};

export const Container = ({ component = 'div', ...props }) => {
  const Component = styled(component)`
    padding: 0 6%;
    margin: auto;
  `;

  return <Component {...props} />;
};
