import React from 'react';
import { css } from 'emotion';
import { scale, rhythm } from '../lib/typography';

import { Container } from './layout';

const Header = () => {
  return (
    <header
      className={css`
        position: sticky;
        top: 0;
        margin-bottom: ${rhythm(1)};
        z-index: 1;
        background: #000;
        border-bottom: 1px solid #888;
        padding-bottom: ${rhythm(1)};
      `}
    >
      <Container
        className={css`
          padding-top: ${rhythm(1)};
        `}
      >
        <h1
          className={css`
            margin: 0;
            font-size: 16px;
            line-height: 1.5;
            text-transform: uppercase;
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
