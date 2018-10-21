import React from 'react';
import styled, { css } from 'react-emotion';

import { Container } from './layout';

const Button = styled('button')`
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

const Header = ({ onClick }) => {
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
            letter-spacing: 0.1em;
          `}
        >
          Every Character Actor Behind a Desk <br /> In A{' '}
          <Button
            className={css`
              border-bottom: 1px solid #333;

              &:hover {
                border-bottom-color: #444;
              }
            `}
            onClick={onClick}
          >
            Coen Brothers Film
          </Button>
        </h1>
      </Container>
    </header>
  );
};

export default Header;
