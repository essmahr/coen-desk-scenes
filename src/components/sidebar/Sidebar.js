// @flow
import React from 'react';
import styled, { css } from 'react-emotion';

import { type Film } from '../../types';

import ScenesList from './ScenesList';

type Props = {
  films: Array<Film>,
  filmsMode: boolean,
  onModeToggle: Function,
};

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
`;

function ToggleButton({
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

function Sidebar(props: Props) {
  const { films, onModeToggle, filmsMode } = props;

  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 400px;
        border-left: 1px solid #211d1a;
      `}
    >
      <div
        className={css`
          height: calc(100% - 2rem);
          overflow: auto;
          padding: 2rem;
          margin-top: 2rem;
        `}
      >
        <ScenesList films={films} filmsMode={filmsMode} />
      </div>
      <ToggleButton onClick={onModeToggle} filmsMode={filmsMode} />
    </div>
  );
}

export default Sidebar;
