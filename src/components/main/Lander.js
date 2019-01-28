import React from 'react';
import { css } from 'emotion';

import * as eases from '../../lib/easings';
import { TRANSITIONS } from '../../lib/transition-helpers';
const { SCENE_ROOT, ROOT_ROOT, ROOT_SCENE } = TRANSITIONS;

export const landerTransitions = `
.${ROOT_ROOT} & {
  &.panel-enter {
    &.panel-enter-active {
    }
  }

  &.panel-exit {
    &.panel-exit-active {
    }
  }
}


.${ROOT_SCENE} & {
  &.panel-exit {
    transform: scale(1) translateX(0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 400ms ${eases.easeInSine};
      transform: scale(0.95) translateX(-3%);
      opacity: 0;
    }
  }

  &.panel-enter {
    transform: translateX(7%);
    opacity: 0;
    &.panel-enter-active {
      transition: all 700ms ${eases.easeOutCubic} 300ms;
      transform: scale(1) translateX(0.01%);
      opacity: 1;
    }
  }
}

.${SCENE_ROOT} & {
  &.panel-enter {
    transform: scale(0.95) translateX(-3%);
    opacity: 0;
    &.panel-enter-active {
      transition: all 400ms ${eases.easeOutSine} 300ms;
      transform: translateX(-0.01%);
      opacity: 1;
    }
  }

  &.panel-exit {
    transform: translateX(0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 400ms ${eases.easeInOutCubic};
      transform: translateX(7%);
      opacity: 0;
    }
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
