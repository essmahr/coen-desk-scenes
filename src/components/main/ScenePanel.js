// @flow
import React from 'react';
import { css } from 'emotion';
import { type Scene, type Film } from '../../types';

import * as eases from '../../lib/easings';
import { mainContainer } from '../../lib/styles';

import { TRANSITIONS } from '../../lib/transition-helpers';
const { INCREMENT, DECREMENT } = TRANSITIONS;

export const sceneTransitions = `
.${INCREMENT} & {
  &.panel-enter {
    transform: translateY(50%);
    opacity: 0;
    &.panel-enter-active {
      transition: all 400ms ${eases.easeInOutCubic};
      transform: translateY(0.01%);
      opacity: 1;
    }
  }


  &.panel-exit {
    transform: translateY(-0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 400ms ${eases.easeInOutCubic};
      transform: translateY(-50%);
      opacity: 0;
    }
  }
}

.${DECREMENT} & {
  &.panel-enter {
    transform: translateY(-50%);
    opacity: 0;
    &.panel-enter-active {
      transition: all 400ms ${eases.easeInOutCubic};
      transform: translateY(-0.01%);
      opacity: 1;
    }
  }

  &.panel-exit {
    transform: translateY(0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 400ms ${eases.easeInOutCubic};
      transform: translateY(50%);
      opacity: 0;
    }
  }
}
`;

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
        margin-top: 1rem;
        height: calc(100% - 1rem);
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
