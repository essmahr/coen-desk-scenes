// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid';
// import { Flipped } from 'react-flip-toolkit';
import { mobileSidebarImageWidth } from '../../lib/styles';

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

  // images 300 / 160
  // ratio 1.875
  // fit three in view
  // - 33.33vw

  return (
    <Flex
      as="ul"
      flexWrap={['nowrap', 'wrap']}
      mx={[0, -2]}
      mb={[0, 2]}
      pr={[2, 0]}
    >
      {scenes.map(scene => (
        <Box
          as="li"
          flex={['0 0 auto', '0 1 auto']}
          width={[mobileSidebarImageWidth, 1, 1 / 2]}
          px={[2, 2]}
          py={[0, 2]}
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
