// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid';

import SceneDetails from './SceneDetails';

import { type Scene, type Film } from '../../../types';

const ScenePanel = function({ scene, film }: { scene: Scene, film: Film }) {
  const imgSrc = scene.fields.image.childImageSharp.fixed.src;
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      css={`
        overflow-y: auto;
        height: calc(100% - 1rem);
      `}
    >
      <Box px={6}>
        <img
          src={imgSrc}
          alt="alt"
          css={{
            borderRadius: 3,
          }}
        />
        <SceneDetails scene={scene} film={film} />
      </Box>
    </Flex>
  );
};

export default ScenePanel;
