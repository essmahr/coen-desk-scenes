// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import { MainContainer, headerHeight } from './structure';

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
`;

export default function MiniHeader() {
  return (
    <Header>
      <MainContainer>
        <Link to="/">
          Every character actor behind a desk in a coen brothers film
        </Link>
      </MainContainer>
    </Header>
  );
}
