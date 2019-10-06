// @flow
import React, { memo } from 'react';
import { Flipped } from 'react-flip-toolkit';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';

import { type Scene } from '../../types';

import * as eases from '../../lib/easings';
import { sceneRoute } from '../../lib/routes';
import ImageContainer from './ImageContainer';

type Props = {
  scene: Scene,
  isCurrent: boolean,
};

const SceneLink = styled(Link)`
  border: 0;
  display: inline-block;
`;

const SceneThumbnail = (props: Props) => {
  const { scene, isCurrent } = props;
  const { src } = scene.thumbnail.childImageSharp.color;

  return (
    <Flipped flipId={scene.id}>
      <ImageContainer isCurrent={isCurrent}>
        <SceneLink to={sceneRoute(scene)}>
          <img
            style={{ transition: `opacity 200ms ${eases.easeInOutSine}` }}
            src={src}
            alt={scene.timestamp}
          />
        </SceneLink>
      </ImageContainer>
    </Flipped>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.isCurrent === nextProps.isCurrent;
};

export default memo(SceneThumbnail, areEqual);

export const sceneThumbnailFragment = graphql`
  fragment Scene_thumbnail on scene {
    id
    timestamp
    film {
      slug
    }
    thumbnail: image {
      childImageSharp {
        color: fluid(maxWidth: 300, maxHeight: 160, quality: 80) {
          src
        }
      }
    }
  }
`;
