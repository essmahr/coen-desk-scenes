// @flow
import React from 'react';
import styled from 'styled-components';

import { border, textPrimary } from '../../colors';

const Button = styled.button`
  display: block;
  background-color: transparent;
  color: ${textPrimary};
  position: absolute;
  bottom: 0;
  height: 2rem;
  width: calc(4rem + 2.5rem);
  left: 0;
  border: 0;
  padding: 0 0 0 2.5rem;
  cursor: pointer;
  transform: rotate(-90deg);
  transform-origin: left bottom;
  text-align: left;
  font-size: 9px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'IBM Plex Sans';

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: calc(50% - 0.5px);
    width: 2rem;
    height: 1px;
    background: ${border};
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function ToggleButton({
  onClick,
  filmsMode,
}: {
  onClick: Function,
  filmsMode: boolean,
}) {
  return (
    <Button onClick={onClick}>
      {filmsMode ? 'Hide films' : 'Show films '}
    </Button>
  );
}
