// @flow
import React from 'react';
import styled, { css } from 'react-emotion';

import { mediaQueries, sidebarWidths } from '../../lib/styles';

import { type Film } from '../../types';

import ScenesList from './ScenesList';

type Props = {
  films: Array<Film>,
  filmsMode: boolean,
  onModeToggle: Function,
};

const Button = styled.button`
  display: block;
  background-color: #080605;
  color: #dbdbd3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 0;
  height: 2rem;
  padding: 0;
  border-bottom: 1px solid #211d1a;
`;

function ToggleButton({
  onClick,
  filmsMode,
}: {
  onClick: Function,
  filmsMode: boolean,
}) {
  return (
    <Button onClick={onClick}>
      {filmsMode ? 'Hide films' : 'Show films '}
    </Button>
  );
}

const responsiveWidths = mediaQueries.reduce((style, query, index) => {
  if (sidebarWidths[index]) {
    style[query] = {
      width: sidebarWidths[index],
    };
  }

  return style;
}, {});

function Sidebar(props: Props) {
  const { films, onModeToggle, filmsMode } = props;

  return (
    <div
      css={[
        css`
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          border-left: 1px solid #211d1a;
          background-color: #080605;
          z-index: 1;
        `,
        css(responsiveWidths),
      ]}
    >
      <div
        css={[
          `
          height: calc(100% - 2rem);
          overflow: auto;
          padding: 1rem;
          margin-top: 2rem;`,

          css({
            [mediaQueries[2]]: {
              padding: '2rem',
            },
          }),
        ]}
      >
        <ScenesList films={films} filmsMode={filmsMode} />
      </div>
      <ToggleButton onClick={onModeToggle} filmsMode={filmsMode} />
    </div>
  );
}

export default Sidebar;
