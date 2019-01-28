// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';

import { type Film } from '../../types';

import FilmListItem from './FilmListItem';
import SceneThumbnail from './SceneThumbnail';

const ScenesWithoutFilms = (props: {
  films: Array<Film>,
  currentScene: ?string,
}) => {
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
          <SceneThumbnail
            scene={scene}
            isCurrent={props.currentScene === scene.id}
          />
        </Box>
      ))}
    </Flex>
  );
};

const ScenesWithFilms = (props: {
  films: Array<Film>,
  currentScene: ?string,
}) => {
  return (
    <ul>
      {props.films.map(film => (
        <FilmListItem
          key={film.slug}
          film={film}
          currentScene={props.currentScene}
        />
      ))}
    </ul>
  );
};

export default function ScenesList({
  filmsMode,
  films,
  currentScene,
}: {
  filmsMode: boolean,
  films: Array<Film>,
  currentScene: ?string,
}) {
  return filmsMode ? (
    <ScenesWithFilms films={films} currentScene={currentScene} />
  ) : (
    <ScenesWithoutFilms films={films} currentScene={currentScene} />
  );
}
