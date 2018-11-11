import React from 'react';
import { css } from 'react-emotion';

const Header = () => {
  return (
    <header
      className={css`
        position: sticky;
        top: 0;
        margin: 3% 0 3rem;
        background: #000;
        padding: 1rem 0;
      `}
    >
      <h1
        className={css`
          position: relative;
          z-index: 20;
          margin: 0;
          font-size: 14px;
          line-height: 1.66;
          letter-spacing: 0.1em;
        `}
      >
        Every Character Actor Behind a Desk In A Coen Brothers Film
      </h1>
    </header>
  );
};

export default Header;
