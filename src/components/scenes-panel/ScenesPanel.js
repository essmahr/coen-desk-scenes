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

export default function ScenesPanel(props: Props) {
  const { films, filmsMode, onModeToggle } = props;

  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 300px;
        overflow: auto;
      `}
    >
      <button onClick={onModeToggle}>toggle</button>
      <ScenesList films={films} filmsMode={filmsMode} />
    </div>
  );
}
