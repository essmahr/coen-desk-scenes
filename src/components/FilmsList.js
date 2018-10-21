import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';

import { filmRoute } from '../lib/routes';

function FilmListItem({ film }) {
  return (
    <li
      className={css`
        margin: 0;
        padding: 0;
        list-style: none;
      `}
    >
      <Link
        className={css`
          color: #fff;
          font-size: 12px;
          text-decoration: none;
        `}
        to={filmRoute(film)}
      >
        {film.title}
      </Link>
    </li>
  );
}

export default function FilmsList({ films }) {
  return (
    <nav
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
      `}
    >
      <ul
        className={css`
          margin: 0;
        `}
      >
        {films.map(film => (
          <FilmListItem key={film.id} film={film} />
        ))}
      </ul>
    </nav>
  );
}
