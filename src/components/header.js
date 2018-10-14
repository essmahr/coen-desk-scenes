import React from 'react';
import { css } from 'emotion';

import { Container } from './layout';

const Header = () => {
  return (
    <header
      className={css`
        position: sticky;
        top: 0;
        margin: 3rem 0;
        z-index: 1;
        background: #000;
        padding: 1rem 0;
      `}
    >
      <Container>
        <h1
          className={css`
            margin: 0;
            font-size: 14px;
            line-height: 1.66;
            // text-transform: uppercase;
            letter-spacing: 0.1em;
          `}
        >
          Every Character Actor Behind a Desk <br /> In A Coen Brothers Film
        </h1>
      </Container>
    </header>
  );
};

export default Header;
