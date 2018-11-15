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
        font-size: 24px;
        line-height: 1.4;
        font-weight: 300;
        color: #eee;
        font-family: 'IBM Plex Serif';
      `}
    >
      Every character actor behind a desk
      <br /> In a Coen Brothers film
    </h1>
    <p
      className={css`
        font-size: 14px;
        line-height: 1.6;
        max-width: 500px;
      `}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, odit
      maiores ex perspiciatis explicabo dolorem quod eos nisi minima quibusdam
      provident inventore aperiam enim et nemo. Eius minus consequuntur itaque!
    </p>
  </header>
);

export default Lander;
