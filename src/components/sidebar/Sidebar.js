// @flow
import React from 'react';
import { css } from 'react-emotion';
import ToggleButton from './ToggleButton';
import { mediaQueries, sidebarWidths } from '../../lib/styles';

import { type Film } from '../../types';

import ScenesList from './ScenesList';

type Props = {
  films: Array<Film>,
  filmsMode: boolean,
  onModeToggle: Function,
  currentScene: ?string,
};

const responsiveWidths = mediaQueries.reduce((style, query, index) => {
  if (sidebarWidths[index]) {
    style[query] = {
      width: sidebarWidths[index],
    };
  }

  return style;
}, {});

function Sidebar(props: Props) {
  const { films, onModeToggle, filmsMode, currentScene } = props;

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
              padding: '1rem 1.5rem',
            },
          }),
        ]}
      >
        <ScenesList
          films={films}
          filmsMode={filmsMode}
          currentScene={currentScene}
        />
      </div>
      <ToggleButton onClick={onModeToggle} filmsMode={filmsMode} />
    </div>
  );
}

export default Sidebar;
