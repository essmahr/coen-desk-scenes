import React, { Component } from 'react';
import { css } from 'emotion';

import { sceneRoute } from '../lib/routes';
import { Link, graphql } from 'gatsby';

function ThumbnailCaption({ scene, visible }) {
  return (
    <figcaption
      className={css({
        position: 'absolute',
        zIndex: -1,
        display: 'flex',
        justifyContent: 'space-between',
        top: visible ? `calc(100% + 0.25rem)` : `100%`,
        left: 0,
        width: '100%',
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        transition: 'all 0.2s ease',
        opacity: visible ? 0.4 : 0,
      })}
    >
      <div>{scene.film.title}</div>
      <div>{scene.timestamp}</div>
    </figcaption>
  );
}

class SceneThumbnail extends Component {
  state = { hovered: false };

  onHoverStart = () => {
    this.setState({ hovered: true });
  };

  onHoverEnd = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { scene } = this.props;
    const { fields, timestamp } = scene;

    const thumbnailSrc = fields.thumbnail.childImageSharp.small.src;

    return (
      <figure
        onMouseEnter={this.onHoverStart}
        onMouseLeave={this.onHoverEnd}
        className={css`
          position: relative;
          z-index: 0;
          margin: 0;
        `}
      >
        <Link
          className={css`
            display: block;
            opacity: 0.8;
            transition: opacity 0.2s ease;

            &:hover {
              opacity: 1;
            }
          `}
          to={sceneRoute(scene)}
        >
          <img
            className={css`
              position: relative;
              z-index: 1;
              margin: 0;
              display: block;
              width: 100%;
            `}
            src={thumbnailSrc}
            alt={timestamp}
          />
        </Link>
        <ThumbnailCaption visible={this.state.hovered} scene={scene} />
      </figure>
    );
  }
}

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
