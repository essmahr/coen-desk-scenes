// @flow
import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { Flex, Box } from 'rebass';
import styled from '@emotion/styled';

import { type Film } from '../../types';

import SceneThumbnail from './SceneThumbnail';

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 16px;
  font-weight: 400;
`;

const Year = styled.h3`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
  letter-spacing: 0.05em;
`;

const EmptyFilm = () => (
  <Box flex="0 1 auto" width={1} px={1} pb={2}>
    <div
      css={{
        fontSize: '10px',
        opacity: '0.8',
      }}
    >
      No people at desks in this film.
    </div>
  </Box>
);

const headerCss = {
  opacity: 0,
  transition: 'opacity 0.5s ease',
};

const handleAppear = element => {
  setTimeout(() => {
    element.style.opacity = 1;
  }, 50);
};

const FilmListItem = ({ film }: { film: Film }) => {
  const scenes =
    film.scenes.length > 0 ? (
      film.scenes.map(scene => (
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
      ))
    ) : (
      <EmptyFilm />
    );

  return (
    <Box as="li" mb={3} px={3} key={film.slug}>
      <Flipped flipId={film.title} key={film.title} onAppear={handleAppear}>
        <Box sx={headerCss}>
          <Box mb={2}>
            <Year>{film.year}</Year>
            <Title>{film.title}</Title>
          </Box>
        </Box>
      </Flipped>
      <Flex as="ul" mx={-1} flexWrap="wrap">
        {scenes}
      </Flex>
    </Box>
  );
};

export default FilmListItem;
