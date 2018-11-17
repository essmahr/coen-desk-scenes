import React from 'react';
import { css } from 'emotion';

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
