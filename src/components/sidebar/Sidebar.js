// @flow
import React from 'react';
import { Box } from '@rebass/grid';
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
        `
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          // border-left: 1px solid #211d1a;
          background-color: #080605;
          z-index: 1;
        `,
        responsiveWidths,
      ]}
    >
      <Box
        mt={4}
        p={4}
        css={`
          height: calc(100% - 2rem);
          overflow: auto;
        `}
      >
        <ScenesList
          films={films}
          filmsMode={filmsMode}
          currentScene={currentScene}
        />
      </Box>
      <ToggleButton onClick={onModeToggle} filmsMode={filmsMode} />
    </div>
  );
}

export default Sidebar;
