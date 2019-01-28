// @flow
import * as React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { graphql, Link } from 'gatsby';
import { css } from 'react-emotion';

import { type Scene } from '../../types';

import { sceneRoute } from '../../lib/routes';

type Props = {
  scene: Scene,
};

export default function SceneThumbnail({ scene, ...rest }: Props) {
  return (
    <Flipped flipId={scene.id} spring="stiff">
      <div
        className={css`
          opacity: 0.8;

          &:hover {
            opacity: 1;
          }
        `}
      >
        <Link to={sceneRoute(scene)}>
          <img
            src={scene.fields.thumbnail.childImageSharp.small.src}
            alt={scene.timestamp}
          />
        </Link>
      </div>
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
