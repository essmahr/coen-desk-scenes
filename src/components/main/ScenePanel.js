// @flow
import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import { type Scene } from '../../types';

const ScenePanel = function({ scene }: { scene: Scene }) {
  const imgSrc = scene.fields.image.childImageSharp.fixed.src;
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

export const query = graphql`
  fragment SceneImageMain on fields_2 {
    image {
      childImageSharp {
        fixed(width: 600) {
          src
        }
      }
    }
  }

  fragment SceneMain on ScenesJson {
    timestamp
    film
    quote
    fields {
      ...SceneImageMain
    }
  }
`;
