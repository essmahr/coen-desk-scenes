import React from 'react';
import { sceneRoute } from '../lib/routes';
import { Link, graphql } from 'gatsby';

const SceneThumbnail = ({ node }) => {
  const { fields, timestamp } = node;

  const thumbnailSrc = fields.thumbnail.childImageSharp.small.src;

  return (
    <Link to={sceneRoute(node)}>
      <img src={thumbnailSrc} alt={timestamp} />
    </Link>
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
