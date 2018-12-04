// @flow
import React from 'react';
import { css } from 'emotion';

import { type Film } from '../../types';

import ScenesList from './ScenesList';

type Props = {
  films: Array<Film>,
  filmsMode: boolean,
  onModeToggle: Function,
};

function ToggleButton({
  onClick,
  filmsMode,
}: {
  onClick: Function,
  filmsMode: boolean,
}) {
  return (
    <button onClick={onClick}>
      {filmsMode ? 'Hide films' : 'Show films '}
    </button>
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
        overflow: auto;
        border-left: 1px solid #211d1a;
        padding: 2rem;
      `}
    >
      <ToggleButton onClick={onModeToggle} filmsMode={filmsMode} />
      <ScenesList films={films} filmsMode={filmsMode} />
    </div>
  );
}

export default Sidebar;
