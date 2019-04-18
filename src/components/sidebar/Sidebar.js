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
  headingsVisible: boolean,
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
  const {
    films,
    onModeToggle,
    filmsMode,
    currentScene,
    headingsVisible,
  } = props;

  const className = headingsVisible ? 'show-headings' : '';

  return (
    <div
      className={className}
      css={[
        `
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: #080605;
          z-index: 1;
        `,
        responsiveWidths,
      ]}
    >
      <Box
        py={4}
        pr={4}
        css={`
          height: 100%;
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
