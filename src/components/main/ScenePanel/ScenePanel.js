// @flow
import React from 'react';
import Img from 'gatsby-image';

import ContentPanel from '../ContentPanel';
import SceneDetails from './SceneDetails';

import { type Scene, type Film } from '../../../types';

const ScenePanel = function({ scene, image }: { scene: Scene }) {
  const img = image.childImageSharp.fluid;
  return (
    <ContentPanel>
      <Img
        fluid={img}
        alt="alt"
        css={{
          borderRadius: 3,
        }}
      />
      <SceneDetails scene={scene} />
    </ContentPanel>
  );
};

export default ScenePanel;
