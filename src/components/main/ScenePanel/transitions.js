// @flow

import * as eases from '../../../lib/easings';

import { TRANSITIONS } from '../../../lib/transition-helpers';
const { INCREMENT, DECREMENT } = TRANSITIONS;

const DURATION = 400;

export default `
.${INCREMENT} & {
  &.panel-enter {
    transform: translateY(50%);
    opacity: 0;
    &.panel-enter-active {
      transition: all ${DURATION}ms ${eases.easeInOutCubic};
      transform: translateY(0.01%);
      opacity: 1;
    }
  }

  &.panel-exit {
    transform: translateY(-0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all ${DURATION}ms ${eases.easeInOutCubic};
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
      transition: all ${DURATION}ms ${eases.easeInOutCubic};
      transform: translateY(-0.01%);
      opacity: 1;
    }
  }

  &.panel-exit {
    transform: translateY(0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all ${DURATION}ms ${eases.easeInOutCubic};
      transform: translateY(50%);
      opacity: 0;
    }
  }
}
`;
