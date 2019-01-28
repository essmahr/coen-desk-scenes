import { TRANSITIONS } from '../../lib/transition-helpers';
import { transitions } from './TransitionContainer';

const transitionStates = ['enter', 'enter-active', 'exit', 'exit-active'];

it.each(Object.keys(TRANSITIONS))(
  'has all the transitions for %s',
  transitionKey => {
    const transitionName = TRANSITIONS[transitionKey];
    expect(transitions).toContain(`.${transitionName} & {`);
  }
);
