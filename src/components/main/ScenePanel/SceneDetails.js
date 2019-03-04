// @flow

import React, { type Node } from 'react';

import { type Scene, type Film } from '../../../types';

const imdbLink = (actor: string, imdbId: string) => (
  <a
    href={`https://www.imdb.com/name/${imdbId}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {actor}
  </a>
);

const detailItem = ({
  label,
  value,
}: {
  label: string,
  value: string | Node,
}) => (
  <span
    key={label}
    css={`
      margin-right: 1.5rem;
      font-size: 9px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-family: 'IBM Plex Sans';
    `}
  >
    <span
      css={`
        display: inline-block;
        margin-right: 0.4rem;
        opacity: 0.8;
      `}
    >
      {label}
    </span>
    <span
      css={`
        opacity: 0.9;
      `}
    >
      {value}
    </span>
  </span>
);

const Details = ({ film, scene }: { film: Film, scene: Scene }) => {
  const { title, year } = film;
  const { actor, imdbId } = scene;

  const details = [
    {
      label: 'actor',
      value: imdbLink(actor, imdbId),
    },
    {
      label: 'film',
      value: title,
    },
    {
      label: 'year',
      value: year,
    },
  ];

  return (
    <div
      css={`
        a {
          display: inline-block;
          padding-bottom: 0.05em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);

          &:hover {
            border-bottom-color: rgba(255, 255, 255, 0.5);
          }
        }
      `}
    >
      {details.map(detailItem)}
    </div>
  );
};

const Quote = ({ quote }: { quote: string }) => {
  return (
    <blockquote
      css={`
        font-family: 'IBM Plex Serif';
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
        text-indent: -0.5em;
        margin-bottom: 0.5rem;
      `}
    >
      &ldquo;
      <span dangerouslySetInnerHTML={{ __html: quote }} />
      &rdquo;
    </blockquote>
  );
};

export default ({ scene, film }: { scene: Scene, film: Film }) => (
  <div
    css={`
      padding-top: 1.5rem;
    `}
  >
    <Quote quote={scene.fields.formattedQuote} />
    <Details film={film} scene={scene} />
  </div>
);
