// @flow
import React from 'react';
import { css } from 'emotion';

import { type Scene } from '../../types';

const ScenePanel = function({ scene }: { scene: Scene }) {
  const imgSrc = scene.fields.thumbnail.childImageSharp.small.src;
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 4rem 6rem;
        justify-content: center;
      `}
    >
      <img src={imgSrc} alt="alt" />
      <div>{scene.film.title}</div>
      <blockquote
        className={css`
          font-family: 'IBM Plex Serif';
          font-style: italic;
          font-size: 1.25rem;
          margin-top: 2rem;
          font-weight: 500;
          text-indent: -0.5em;
        `}
      >
        &ldquo;
        {scene.quote}
        &rdquo;
      </blockquote>
    </div>
  );
};

export default ScenePanel;
