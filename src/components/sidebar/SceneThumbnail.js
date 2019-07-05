// @flow
import * as React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { type Scene } from '../../types';

import { sceneRoute } from '../../lib/routes';
import ImageContainer from './ImageContainer';

type Props = {
  scene: Scene,
  isCurrent: boolean,
};

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
