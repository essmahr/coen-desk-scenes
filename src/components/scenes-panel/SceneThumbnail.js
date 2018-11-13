// @flow
import * as React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { graphql } from 'gatsby';

import { type Scene } from '../../types';

type Props = {
  scene: Scene,
};

export default function SceneThumbnail({ scene }: Props) {
  return (
    <Flipped flipId={scene.id}>
      <div>
        <img
          src={scene.fields.thumbnail.childImageSharp.small.src}
          alt={scene.timestamp}
        />
      </div>
    </Flipped>
  );
}

export const sceneThumbnailFragment = graphql`
  fragment Scene_thumbnail on ScenesJson {
    id
    timestamp
    film
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
