// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Transition from 'react-transition-group/Transition';

import { mainContainer, headerHeight } from '../lib/styles';

const duration = 700;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight};
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  font-weight: 600;
  font-family: IBM Plex Sans;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #211d1a;
  text-transform: uppercase;
  transition: transform ${duration}ms cubic-bezier(0.81, 0.115, 0.325, 0.91);
`;

const transitionStyles = {
  entering: { transform: `translate(0, -100%)` },
  entered: { transform: `translate(0, 0)` },
  exiting: { transform: `translate(0, 0)` },
  exited: { transform: `translate(0, -100%)` },
};

export default function MiniHeader({ visible }: { visible: boolean }) {
  return (
    <Transition in={visible} timeout={0}>
      {state => (
        <Header css={transitionStyles[state]}>
          <div className={mainContainer}>
            <Link to="/">
              Every character actor behind a desk in a coen brothers film
            </Link>
          </div>
        </Header>
      )}
    </Transition>
  );
}
