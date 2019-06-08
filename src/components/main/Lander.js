// @flow

import React from 'react';
import { Flex } from '@rebass/grid';

import * as eases from '../../lib/easings';
import { TRANSITIONS } from '../../lib/transition-helpers';
const { SCENE_ROOT, ROOT_ROOT, ROOT_SCENE } = TRANSITIONS;

export const landerTransitions = `
.${ROOT_ROOT} & {
  &.panel-exit {
    opacity: 1;

    &.panel-exit-active {
      transition: opacity 400ms ${eases.easeInSine};
      opacity: 0;
    }
  }

  &.panel-enter {
    opacity: 0;

    &.panel-enter-active {
      transition: opacity 500ms ${eases.easeOutSine} 300ms;
      opacity: 1;
    }
  }
}

.${ROOT_SCENE} & {
  &.panel-exit {
    transform: translateX(0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 400ms ${eases.easeInSine};
      transform: translateX(-3%);
      opacity: 0;
    }
  }

  &.panel-enter {
    transform: translateX(7%);
    opacity: 0;

    &.panel-enter-active {
      transition: all 700ms ${eases.easeOutCubic} 300ms;
      transform: translateX(0.01%);
      opacity: 1;
    }
  }
}

.${SCENE_ROOT} & {
  &.panel-enter {
    transform: translateX(-3%);
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

const DesktopBr = () => (
  <br
    css={`
      @media (max-width: 980px) {
        display: none;
      }
    `}
  />
);

const Lander = () => (
  <Flex
    as="header"
    flexDirection="column"
    justifyContent="center"
    p={4}
    pl={[4, 5]}
    css={'height: 100%'}
  >
    <h1
      css={`
        font-size: 32px;
        line-height: 1.3;
        font-weight: 600;
        font-family: 'IBM Plex Serif';
      `}
    >
      Every character actor behind a desk
      <DesktopBr /> In a Coen Brothers film
    </h1>
  </Flex>
);

export default Lander;
