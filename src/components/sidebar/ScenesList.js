// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { Flipped } from 'react-flip-toolkit';

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
    <Flex as="ul" flexWrap="wrap" mx={-2} mb={2}>
      <Flipped>
        <div />
      </Flipped>
      {scenes.map(scene => (
        <Box
          as="li"
          flex="0 1 auto"
          width={[1 / 2]}
          px={3}
          pt={1}
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
    <Box as="ul" mx={-2}>
      {props.films.map(film => (
        <FilmListItem
          key={film.slug}
          film={film}
          currentScene={props.currentScene}
        />
      ))}
    </Box>
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
