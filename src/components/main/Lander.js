import React from 'react';
import { css } from 'emotion';

import * as eases from '../../lib/easings';
import { TRANSITIONS } from '../../lib/transition-helpers';
const { SCENE_ROOT, ROOT_ROOT, ROOT_SCENE } = TRANSITIONS;
const ease = `cubic-bezier(0.645, 0.045, 0.355, 1.000)`;
const duration = 900;
const interval = 400;

export const landerTransitions = `
  &.${ROOT_ROOT}-enter {
    opacity: 0.01;

    &.${ROOT_ROOT}-enter-active {
      transition: all ${duration / 2}ms ${ease};
      opacity: 1;
    }
  }

  &.${ROOT_ROOT}-exit {
    opacity: 1;

    &.${ROOT_ROOT}-exit-active {
      transition: all ${duration / 2}ms ${ease};
      opacity: 0.01;
    }
  }

  &.${SCENE_ROOT}-enter {
    transform: translateX(-3%);
    opacity: 0.01;

    &.${SCENE_ROOT}-enter-active {
      transition: all 750ms ${eases.easeOutSine} 200ms;
      transform: translateX(-0.01%);
      opacity: 1;
    }
  }

  &.${SCENE_ROOT}-exit {
    transform: translateX(-0.01%);
    opacity: 1;

    &.${SCENE_ROOT}-exit-active {
      transition: all ${duration / 2}ms ${ease};
      transform: translateX(-3%);
      opacity: 0.01;
    }
  }
`;

const Lander = () => (
  <header
    className={css`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 4rem;
      justify-content: center;
    `}
  >
    <h1
      className={css`
        font-size: 32px;
        line-height: 1.3;
        font-weight: 600;
        font-family: 'IBM Plex Serif';
      `}
    >
      Every character actor behind a desk
      <br /> In a Coen Brothers film
    </h1>
  </header>
);

export default Lander;
