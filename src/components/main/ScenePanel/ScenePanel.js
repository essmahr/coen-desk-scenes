// @flow
import React from 'react';
import Img from 'gatsby-image';

import ContentPanel from '../ContentPanel';
import SceneDetails from './SceneDetails';

import { type Scene } from '../../../types';

const ScenePanel = function({ scene }: { scene: Scene }) {
  const img = scene.image.childImageSharp.fluid;
  return (
    <ContentPanel>
      <Img
        fluid={img}
        alt="alt"
        sx={{
          borderRadius: 3,
        }}
      />
      <SceneDetails scene={scene} />
    </ContentPanel>
  );
};

export default ScenePanel;
