// @flow
import React, { memo, useContext } from 'react';
import { Flex, Box } from 'rebass';
import dumbMemoize from '../../lib/dumbMemoize';
import { mobileSidebarImageWidth } from '../../lib/styles';
import Context from '../../lib/context';
import { type Film } from '../../types';

import FilmListItem from './FilmListItem';
import SceneThumbnail from './SceneThumbnail';

const gatherScenes = films =>
  films.reduce((scenes, film) => [...scenes, ...film.scenes], []);

const gatherScenesOnce = dumbMemoize(gatherScenes);

const ScenesWithoutFilms = (props: {
  films: Array<Film>,
  currentSceneId: ?string,
}) => {
  const scenes = gatherScenesOnce(props.films);

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
            isCurrent={props.currentSceneId === scene.id}
          />
        </Box>
      ))}
    </Flex>
  );
};

const ScenesWithFilms = (props: {
  films: Array<Film>,
  currentSceneId: ?string,
}) => {
  return (
    <Box as="ul" mx={-2}>
      {props.films.map(film => (
        <FilmListItem
          key={film.slug}
          film={film}
          currentSceneId={props.currentSceneId}
        />
      ))}
    </Box>
  );
};

const ScenesList = ({
  filmsMode,
  films,
}: {
  filmsMode: boolean,
  films: Array<Film>,
}) => {
  const ScenesComponent = filmsMode ? ScenesWithFilms : ScenesWithoutFilms;
  const currentSceneId = useContext(Context);

  return <ScenesComponent films={films} currentSceneId={currentSceneId} />;
};

export default memo(ScenesList);
