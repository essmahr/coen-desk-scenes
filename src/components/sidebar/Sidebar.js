// @flow
import React from 'react';
import { Box } from '@rebass/grid';
import { linearGradient } from 'polished';

import ToggleButton from './ToggleButton';
import { widths, mobileSidebarHeight } from '../../lib/styles';
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

const gradient = linearGradient({
  colorStops: [`${background} 70%`, 'rgba(0,0,0,0) 99%'],
  toDirection: 'to top',
  fallback: 'transparent',
});

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
      css={{
        position: 'fixed',
        zIndex: 1,

        '@media screen and (max-width: calc(40em - 1px))': {
          ...gradient,
          height: mobileSidebarHeight,
          right: 0,
          bottom: 0,
          left: 0,
        },

        '@media screen and (min-width: 40em)': {
          height: '100%',
          right: 0,
          bottom: 0,
          zIndex: 1,
          backgroundColor: background,
        },
      }}
      width={widths.sidebar}
    >
      <Box
        py={[3, 4]}
        pr={[0, 2, 4, 4]}
        pl={[2, 0, 0, 0]}
        css={`
          height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
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
