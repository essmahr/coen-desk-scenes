import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { border, textSecondary } from '../colors';

const AboutIcon = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  border-radius: 50%;
  border: 1px solid ${border};
  font-size: 12px;
  font-family: 'IBM Plex Mono';
  text-align: center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 40em) {
    bottom: calc(1rem - 8px);
    right: 1rem;
    width: 36px;
    height: 36px;
  }

  @media screen and (min-width: 40em) {
    bottom: 1rem;
    left: 1rem;
    width: 24px;
    height: 24px;
  }

  &:hover {
    border-color: ${textSecondary};
  }
`;

export default () => {
  return (
    <Link to="/about">
      <AboutIcon>?</AboutIcon>
    </Link>
  );
};
