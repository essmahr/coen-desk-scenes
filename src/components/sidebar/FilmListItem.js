// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import { type Film } from '../../types';

import SceneThumbnail from './SceneThumbnail';

const Title = styled.h2`
  font-family: 'IBM Plex Serif';
  font-size: 16px;
  font-weight: 400;
`;

const Year = styled.h3`
  font-size: 11px;
  font-family: 'IBM Plex Sans Condensed';
  font-weight: 500;
  opacity: 0.8;
  letter-spacing: 0.05em;
`;

const EmptyFilm = () => (
  <Box flex="0 1 auto" width={1} px={1} pb={2}>
    <div
      css={`
        font-size: 10px;
        opacity: 0.8;
      `}
    >
      No people at desks in this film.
    </div>
  </Box>
);

const FilmListItem = ({
  film,
  currentScene,
}: {
  film: Film,
  currentScene: ?string,
}) => {
  const scenes =
    film.scenes.length > 0 ? (
      film.scenes.map(scene => (
        <Box
          as="li"
          flex="0 1 auto"
          width={[1 / 3]}
          px={2}
          pb={3}
          key={scene.id}
        >
          <SceneThumbnail scene={scene} isCurrent={scene.id === currentScene} />
        </Box>
      ))
    ) : (
      <EmptyFilm />
    );

  return (
    <Box as="li" mb={4} px={3} key={film.slug}>
      <Box
        mb={3}
        css={`
          opacity: 0;
          transition: opacity 0.3s ease;

          .show-headings & {
            opacity: 1;
          }
        `}
      >
        <Year>{film.year}</Year>
        <Title>{film.title}</Title>
      </Box>
      <Flex as="ul" mx={-2} flexWrap="wrap">
        {scenes}
      </Flex>
    </Box>
  );
};

export default FilmListItem;
