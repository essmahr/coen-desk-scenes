// @flow
import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@rebass/grid';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

const duration = 500;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.6rem;
  font-weight: 600;
  font-family: IBM Plex Sans Condensed;
  display: flex;
  line-height: 1;
  flex-direction: column;
  letter-spacing: 0.02em;
  justify-content: center;
  z-index: 1;
  transition: transform ${duration}ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const transitionStyles = {
  entering: { transform: `translate(0, -100%)` },
  entered: { transform: `translate(0, 0)`, transitionDelay: '300ms' },
  exiting: { transform: `translate(0, 0)` },
  exited: { transform: `translate(0, -100%)` },
};

export default function MiniHeader({ visible }: { visible: boolean }) {
  return (
    <Transition in={visible} timeout={0}>
      {state => (
        <Header css={transitionStyles[state]}>
          <Box p={4}>
            <Link to="/">E. C. A. B. a D. in a C. B. F.</Link>
          </Box>
        </Header>
      )}
    </Transition>
  );
}
