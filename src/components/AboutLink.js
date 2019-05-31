import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { border, textSecondary } from '../colors';

const AboutIcon = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${border};
  font-size: 12px;
  font-family: 'IBM Plex Mono';
  text-align: center;
  justify-content: center;
  align-items: center;

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
