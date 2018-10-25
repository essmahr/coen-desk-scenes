import React from 'react';
import { css } from 'react-emotion';

import { Container } from './layout';

export default function SceneModal({ scene }) {
  const { fields } = scene;

  const thumbnailSrc = fields.thumbnail.childImageSharp.small.src;
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: #000;
      `}
    >
      <Container>
        <div
          className={css`
            // width: 100vw;
            height: 100vh;
            display: flex;
            padding: 2rem 0;
          `}
        >
          <img
            className={css`
              width: 100%;
              margin: auto;
            `}
            src={thumbnailSrc}
            alt={scene.timestamp}
          />
        </div>
      </Container>
    </div>
  );
}
