// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import styled, { css } from 'react-emotion';

import { type Film } from '../../types';

import SceneThumbnail from './SceneThumbnail';

const Title = styled.h2`
  font-family: 'IBM Plex Serif';
  font-size: 16px;
  font-family: 'IBM Plex Serif';
  font-weight: 500;
`;

const Year = styled.h3`
  font-size: 10px;
  font-family: 'IBM Plex Sans Condensed';
  opacity: 0.8;
  letter-spacing: 0.05em;
`;

const FilmListItem = ({ film }: { film: Film }) => {
  return (
    <li
      key={film.slug}
      className={css`
        margin-bottom: 2rem;
      `}
    >
      <div
        className={css`
          margin-bottom: 0.6em;
        `}
      >
        <Year>{film.year}</Year>
        <Title>{film.title}</Title>
      </div>
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
};

export default FilmListItem;
