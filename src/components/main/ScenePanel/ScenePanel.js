// @flow
import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Img from 'gatsby-image';

import SceneDetails from './SceneDetails';

import { type Scene, type Film } from '../../../types';

const ScenePanel = function({ scene, film }: { scene: Scene, film: Film }) {
  const img = scene.fields.image.childImageSharp.fluid;
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      css={`
        overflow-y: auto;
        height: 100%;
      `}
    >
      <Box px={6} pt={4}>
        <Img
          fluid={img}
          alt="alt"
          backgroundColor="#292727"
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
