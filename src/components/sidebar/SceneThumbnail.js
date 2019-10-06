// @flow
import React, { memo, useContext } from 'react';
import { Flipped } from 'react-flip-toolkit';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import Context from '../../lib/context';

import { type Scene } from '../../types';

import { easeInOutSine } from '../../lib/easings';
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

const SceneImg = styled.img`
  transition: opacity 200ms ${easeInOutSine};
`;

const SceneThumbnail = memo(
  (props: Props) => {
    const { scene, isCurrent } = props;
    const { src } = scene.thumbnail.childImageSharp.color;

    return (
      <Flipped flipId={scene.id}>
        <ImageContainer isCurrent={isCurrent}>
          <SceneLink to={sceneRoute(scene)}>
            <SceneImg src={src} alt={scene.timestamp} />
          </SceneLink>
        </ImageContainer>
      </Flipped>
    );
  },
  (prevProps, nextProps) => prevProps.isCurrent === nextProps.isCurrent
);

const ConnectedSceneThumbnail = (props: Props) => {
  const currentSceneId = useContext(Context);

  return (
    <SceneThumbnail
      scene={props.scene}
      isCurrent={currentSceneId === props.scene.id}
    />
  );
};

export default ConnectedSceneThumbnail;

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
