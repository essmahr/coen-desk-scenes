// @flow
import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import { type Scene, type Film } from '../../types';

import * as eases from '../../lib/easings';
import { mainContainer } from '../../lib/styles';

import { TRANSITIONS } from '../../lib/transition-helpers';
const { ROOT_SCENE, SCENE_ROOT, INCREMENT, DECREMENT } = TRANSITIONS;
const ease = `cubic-bezier(0.645, 0.045, 0.355, 1.000)`;
const duration = 900;
const interval = 400;

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

  &.${ROOT_SCENE}-exit {
    transform: scale(0.999);
    opacity: 1;

    &.${ROOT_SCENE}-exit-active {
      transition: all ${duration / 2}ms ${ease};
      transform: scale(0.97);
      opacity: 0;
    }
  }

  &.${ROOT_SCENE}-enter {
    transform: translateX(3%);
    opacity: 0;

    &.${ROOT_SCENE}-enter-active {
      transition: all 650ms ${eases.easeOutSine} 300ms;
      transform: translateX(0.01%);
      opacity: 1;
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
