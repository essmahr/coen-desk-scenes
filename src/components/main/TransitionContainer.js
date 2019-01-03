import * as React from 'react';
import styled, { css } from 'react-emotion';
import { Transition, TransitionGroup } from 'react-transition-group';

// const TransitionContainer = styled.div`
//   transition: opacity 0.2s ease;
// `;

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
// };

export default function TransitionContainer({ children, location }) {
  return (
    <TransitionGroup>
      <Transition key={location}>{children}</Transition>
    </TransitionGroup>
  );
}
