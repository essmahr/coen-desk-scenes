// @flow
import React from 'react';
import styled from '@emotion/styled';
import { Box } from 'rebass';
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
  currentSceneId: ?string,
};

const gradient = linearGradient({
  colorStops: [`${background} 70%`, 'rgba(0,0,0,0) 99%'],
  toDirection: 'to top',
  fallback: 'transparent',
});

const SidebarParent = styled(Box)`
  position: fixed;
  zindex: 1;

  @media screen and (max-width: calc(40em - 1px)) {
    ${gradient};
    height: ${mobileSidebarHeight};
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 40em) {
    height: 100%;
    right: 0;
    bottom: 0;
    zindex: 1;
    backgroundcolor: ${background};
  }
`;

function Sidebar(props: Props) {
  const { films, onModeToggle, filmsMode, currentSceneId } = props;

  return (
    <SidebarParent width={widths.sidebar}>
      <Box
        py={[3, 4]}
        pr={[0, 2, 4, 4]}
        pl={[2, 0, 0, 0]}
        sx={{
          height: '100%',
          overflow: 'auto',
          '-webkit-overflow-scrolling': 'touch',
        }}
      >
        <ScenesList
          films={films}
          filmsMode={filmsMode}
          currentSceneId={currentSceneId}
        />
      </Box>
      <ToggleButton onClick={onModeToggle} filmsMode={filmsMode} />
    </SidebarParent>
  );
}

export default Sidebar;
