// @flow
import React from 'react';

import { type Film } from '../../types';

import { H2 } from '../type';
import SceneThumbnail from './SceneThumbnail';

const ScenesWithoutFilms = (props: { films: Array<Film> }) => {
  const scenes = props.films.reduce(
    (scenes, film) => [...scenes, ...film.scenes],
    []
  );

  return (
    <ul>
      {scenes.map(scene => (
        <li key={scene.id}>
          <SceneThumbnail scene={scene} />
        </li>
      ))}
    </ul>
  );
};

const ScenesWithFilms = (props: { films: Array<Film> }) => {
  return (
    <ul>
      {props.films.map(film => {
        return (
          <li key={film.slug}>
            <H2>{film.title}</H2>
            <ul>
              {film.scenes.map(scene => (
                <li key={scene.id}>
                  <SceneThumbnail scene={scene} />
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default function ScenesList({
  filmsMode,
  films,
}: {
  filmsMode: boolean,
  films: Array<Film>,
}) {
  return filmsMode ? (
    <ScenesWithFilms films={films} />
  ) : (
    <ScenesWithoutFilms films={films} />
  );
}
