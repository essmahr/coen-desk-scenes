// @flow
import * as React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import * as eases from '../../lib/easings';

import { type Scene } from '../../types';

import { sceneRoute } from '../../lib/routes';

type Props = {
  scene: Scene,
  isCurrent: boolean,
};

const ImageContainer = styled.div(
  {
    position: 'relative',
    opacity: 0.7,
    transition: `opacity 400ms ${eases.easeInOutSine}`,
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        img: {
          opacity: 0.3,
        },
      };
    } else {
      return {
        '&:hover': {
          opacity: 1,
        },
      };
    }
  }
);

export default function SceneThumbnail({ scene, isCurrent }: Props) {
  return (
    <Flipped flipId={scene.id}>
      <ImageContainer isCurrent={isCurrent}>
        <Link to={sceneRoute(scene)}>
          <img
            css={{ transition: 'opacity 400ms ease-in-out' }}
            src={scene.fields.thumbnail.childImageSharp.small.src}
            alt={scene.timestamp}
          />
        </Link>
      </ImageContainer>
    </Flipped>
  );
}

export const sceneThumbnailFragment = graphql`
  fragment Scene_thumbnail on ScenesJson {
    id
    timestamp
    fields {
      thumbnail: image {
        childImageSharp {
          small: fixed(width: 300, quality: 100) {
            src
          }
        }
      }
    }
  }
`;
