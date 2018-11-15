// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import { css } from 'react-emotion';
import { type Film } from '../../types';

import { H2 } from '../type';
import SceneThumbnail from './SceneThumbnail';

const ScenesWithoutFilms = (props: { films: Array<Film> }) => {
  const scenes = props.films.reduce(
    (scenes, film) => [...scenes, ...film.scenes],
    []
  );

  return (
    <Flex as="ul" mx={-3} flexWrap="wrap">
      {scenes.map(scene => (
        <Box
          as="li"
          flex="0 1 auto"
          width={[1 / 2]}
          px={3}
          pb={4}
          key={scene.id}
        >
          <SceneThumbnail scene={scene} />
        </Box>
      ))}
    </Flex>
  );
};

const ScenesWithFilms = (props: { films: Array<Film> }) => {
  return (
    <ul>
      {props.films.map(film => {
        return (
          <li
            key={film.slug}
            className={css`
              margin-bottom: 2rem;
              padding-bottom: 2rem;
              border-bottom: 1px solid #222;
            `}
          >
            <H2>{film.title}</H2>
            <Flex as="ul" mx={-1} flexWrap="wrap">
              {film.scenes.map(scene => (
                <Box
                  as="li"
                  flex="0 1 auto"
                  width={[1 / 3]}
                  px={1}
                  pb={2}
                  key={scene.id}
                >
                  <SceneThumbnail scene={scene} />
                </Box>
              ))}
            </Flex>
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
