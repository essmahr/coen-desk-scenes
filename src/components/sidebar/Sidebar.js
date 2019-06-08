// @flow
import React from 'react';
import { Box } from '@rebass/grid';
import ToggleButton from './ToggleButton';
import { widths } from '../../lib/styles';
import { background } from '../../colors';

import { type Film } from '../../types';

import ScenesList from './ScenesList';

type Props = {
  films: Array<Film>,
  filmsMode: boolean,
  headingsVisible: boolean,
  onModeToggle: Function,
  currentScene: ?string,
};

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
    <Box
      className={className}
      css={[
        `
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: ${background};
          z-index: 1;
        `,
      ]}
      width={widths.sidebar}
    >
      <Box
        py={4}
        pr={[4, 2, 4, 4]}
        pl={[4, 0, 0, 0]}
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
    </Box>
  );
}

export default Sidebar;
