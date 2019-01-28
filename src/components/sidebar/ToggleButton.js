// @flow
import React from 'react';
import styled from 'react-emotion';

const Button = styled.button`
  display: block;
  background-color: #080605;
  color: #dbdbd3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 0;
  height: 2rem;
  padding: 0;
  border-bottom: 1px solid #211d1a;
  cursor: pointer;
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
