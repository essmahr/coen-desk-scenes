// @flow
import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import { type Scene, type Film } from '../../types';

import { mainContainer } from '../../lib/styles';

const DetailsSection = ({ film }: { film: Film }) => {
  const { title, year } = film;

  return (
    <div
      className={css`
        font-size: 12px;
        font-family: 'IBM Plex Sans Condensed';
        font-weight: 500;
      `}
    >
      {title} &mdash; {year}
    </div>
  );
};

const QuoteSection = ({ quote }: { quote: string }) => {
  return (
    <blockquote
      className={css`
        font-family: 'IBM Plex Serif';
        font-style: italic;
        font-size: 1.5rem;
        font-weight: 500;
        text-indent: -0.5em;
      `}
    >
      &ldquo;
      {quote}
      &rdquo;
    </blockquote>
  );
};

const ScenePanel = function({ scene, film }: { scene: Scene, film: Film }) {
  const imgSrc = scene.fields.image.childImageSharp.fixed.src;
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        justify-content: center;
        margin-top: 2rem;
      `}
    >
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div className={mainContainer}>
          <img src={imgSrc} alt="alt" />
          <div
            className={css`
              margin-top: 2rem;
            `}
          >
            <div
              className={css`
                padding-bottom: 1rem;
              `}
            >
              <QuoteSection quote={scene.quote} />
            </div>
            <DetailsSection film={film} />
          </div>
        </div>
      </div>
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
