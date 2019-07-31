// @flow

import * as eases from '../../../lib/easings';

import { TRANSITIONS } from '../../../lib/transition-helpers';
const { INCREMENT, DECREMENT } = TRANSITIONS;

export default `
.${INCREMENT} & {
  &.panel-enter {
    transform: translateY(50%);
    opacity: 0;
    &.panel-enter-active {
      transition: all 350ms ${eases.easeInOutSine};
      transform: translateY(0.01%);
      opacity: 1;
    }
  }

  &.panel-exit {
    transform: translateY(-0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 350ms ${eases.easeInOutSine};
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
      transition: all 350ms ${eases.easeInOutSine};
      transform: translateY(-0.01%);
      opacity: 1;
    }
  }

  &.panel-exit {
    transform: translateY(0.01%);
    opacity: 1;

    &.panel-exit-active {
      transition: all 350ms ${eases.easeInOutSine};
      transform: translateY(50%);
      opacity: 0;
    }
  }
}
`;
