import React from 'react';
import { Subscribe } from 'unstated';

import FilmsList from './FilmsList';
import { filmHoverState } from '../stores';

export default function FilmsListContainer(props) {
  return (
    <Subscribe to={[filmHoverState]}>
      {({ state, setHovered, setUnHovered }) => (
        <FilmsList
          hovered={state.hovered}
          onHover={setHovered}
          onHoverEnd={setUnHovered}
          {...props}
        />
      )}
    </Subscribe>
  );
}
