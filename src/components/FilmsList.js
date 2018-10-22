import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';

import { filmRoute } from '../lib/routes';

function FilmListItem({ film, current, hovered, onHover, onHoverEnd }) {
  return (
    <li
      className={css`
        margin: 0;
        padding: 0;
        list-style: none;
      `}
    >
      <Link
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
        className={css`
          display: block;
          color: #ccc;
          font-size: 12px;
          text-decoration: none;
          padding: 0.5em 0;
        `}
        to={filmRoute(film)}
      >
        {film.title}
        {current && '?'}
        {hovered && '!'}
      </Link>
    </li>
  );
}

export default function FilmsList({
  films,
  currentFilm,
  hovered,
  onHover,
  onHoverEnd,
}) {
  return (
    <nav
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
      `}
    >
      <ul
        className={css`
          margin: 0;
        `}
      >
        {films.map(film => (
          <FilmListItem
            key={film.slug}
            film={film}
            current={film.slug === currentFilm}
            hovered={film.slug === hovered}
            onHover={() => {
              onHover(film.slug);
            }}
            onHoverEnd={onHoverEnd}
          />
        ))}
      </ul>
    </nav>
  );
}
