// @flow
import React from 'react';
import Img from 'gatsby-image';

import ContentPanel from '../ContentPanel';
import SceneDetails from './SceneDetails';

import { type Scene, type Film } from '../../../types';

const ScenePanel = function({ scene, film }: { scene: Scene, film: Film }) {
  const img = scene.fields.image.childImageSharp.fluid;
  return (
    <ContentPanel>
      <Img
        fluid={img}
        alt="alt"
        css={{
          borderRadius: 3,
        }}
      />
      <SceneDetails scene={scene} film={film} />
    </ContentPanel>
  );
};

export default ScenePanel;
