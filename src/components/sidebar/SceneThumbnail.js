// @flow
import * as React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
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
    opacity: 0.5,
    transition: `opacity 300ms ${eases.easeInOutSine}`,

    img: {
      borderRadius: 3,
    },
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        opacity: 0.8,
      };
    } else {
      return {
        '&:hover': {
          opacity: 0.6,
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
          <Img
            style={{ transition: 'opacity 400ms ease-in-out' }}
            fluid={scene.fields.thumbnail.childImageSharp.small}
            critical
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
          small: fluid(maxWidth: 300, maxHeight: 160, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
