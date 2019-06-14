// @flow
import * as React from 'react';
import { Box } from '@rebass/grid';
import AboutLink from '../AboutLink';
import TransitionContainer from './TransitionContainer';
import { widths, mobileSidebarHeight } from '../../lib/styles';

function Main({
  children,
  location,
  sceneIndex,
}: {
  children: React.ChildrenArray<React.Node>,
  location: string,
  sceneIndex: number | null,
}) {
  return (
    <Box
      css={`
        position: fixed;
        top: 0;
        bottom: ${mobileSidebarHeight};
        left: 0;

        @media screen and (min-width: 40em) {
          bottom: 0;
        }
      `}
      width={widths.main}
    >
      <TransitionContainer location={location} sceneIndex={sceneIndex}>
        {children}
      </TransitionContainer>
      <AboutLink />
    </Box>
  );
}

export default Main;
