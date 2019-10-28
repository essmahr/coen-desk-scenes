// @flow
import React from 'react';
import styled from '@emotion/styled';
import { Box } from 'rebass';
import BorderedLink from '../BorderedLink';
import TransitionContainer from './TransitionContainer';
import { widths, mobileSidebarVW } from '../../lib/styles';

const AboutLink = styled(BorderedLink)`
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 40em) {
    bottom: calc(${mobileSidebarVW} + 1.5rem);
    right: 1rem;
  }

  @media screen and (min-width: 40em) {
    bottom: 1rem;
    left: 1rem;
  }
`;

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
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
      }}
      width={widths.main}
    >
      <TransitionContainer location={location} sceneIndex={sceneIndex}>
        {children}
      </TransitionContainer>
      <AboutLink to="/about">About</AboutLink>
    </Box>
  );
}

export default Main;
