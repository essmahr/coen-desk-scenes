// @flow

import React from 'react';
import { css } from 'react-emotion';

import { type Scene, type Film } from '../../../types';

const Details = ({ film, scene }: { film: Film, scene: Scene }) => {
  const { title, year } = film;
  const { actor, imdbId } = scene;

  return (
    <div
      className={css`
        font-size: 11px;
        font-family: 'IBM Plex Sans';
        font-weight: 300;
        // text-transform: uppercase;
        // letter-spacing: 0.01em;
      `}
    >
      <p>
        <strong>{title}</strong> ({year})
      </p>
      <p>
        Actor: <a href={`https://www.imdb.com/name/${imdbId}`}>{actor}</a>{' '}
      </p>
    </div>
  );
};

const Quote = ({ quote }: { quote: string }) => {
  return (
    <blockquote
      className={css`
        font-family: 'IBM Plex Serif';
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
        text-indent: -0.5em;
        margin-bottom: 1rem;
      `}
    >
      &ldquo;
      {quote}
      &rdquo;
    </blockquote>
  );
};

export default ({ scene, film }) => (
  <div
    className={css`
      padding-top: 2.2rem;
    `}
  >
    <Quote quote={scene.quote} />
    <Details film={film} scene={scene} />
  </div>
);
