// @flow
import React from 'react';
import { Box } from '@rebass/grid';
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
          // outline: 1px solid red;
          background-color: ${background};

          @media screen and (max-width: calc(40em - 1px)) {
            height: ${mobileSidebarHeight};
            right: 0;
            bottom: 0;
            left: 0;
          }

          @media screen and (min-width: 40em) {
            height: 100%;
            right: 0;
            bottom: 0;
            z-index: 1;
          }
        `,
      ]}
      width={widths.sidebar}
    >
      <Box
        py={[2, 4]}
        pr={[1, 2, 4, 4]}
        pl={[1, 0, 0, 0]}
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
