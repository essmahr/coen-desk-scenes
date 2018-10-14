import React from 'react';
import { css } from 'emotion';

import { sceneRoute } from '../lib/routes';
import { Link, graphql } from 'gatsby';

const SceneThumbnail = ({ node }) => {
  const { fields, timestamp } = node;

  const thumbnailSrc = fields.thumbnail.childImageSharp.small.src;

  return (
    <article>
      <Link
        className={css`
          display: block;
          opacity: 0.8;
          transition: opacity 0.3s ease;

          &:hover {
            opacity: 1;
          }
        `}
        to={sceneRoute(node)}
      >
        <img
          className={css`
            margin: 0;
            display: block;
            width: 100%;
          `}
          src={thumbnailSrc}
          alt={timestamp}
        />
      </Link>
    </article>
  );
};

export default SceneThumbnail;

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
