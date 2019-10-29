// @flow

import React, { type Node } from 'react';
import { css } from '@emotion/core';
import { Box, Text } from 'rebass';

import { type Scene } from '../../../types';

const imdbLink = (actor: string, imdbId: string) => (
  <a
    href={`https://www.imdb.com/name/${imdbId}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {actor}
  </a>
);

const detailItem = ({
  label,
  value,
}: {
  label: string,
  value: string | Node,
}) => (
  <Box
    key={label}
    display="inline-block"
    fontFamily="sans"
    sx={{
      marginRight: '1.5rem',
      fontSize: '9px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',

      '@media screen and (max-width: 40em)': {
        display: 'block',
        marginBottom: '1em',
      },
    }}
  >
    <Box
      display="inline-block"
      sx={{
        marginRight: '0.33rem',
        opacity: 0.8,
      }}
    >
      {label}:
    </Box>
    <Box
      display="inline-block"
      sx={{
        opacity: 0.9,
      }}
    >
      {value}
    </Box>
  </Box>
);

const Details = ({ scene }: { scene: Scene }) => {
  const { actor, imdbId, film } = scene;
  const { title, year } = film;

  const details = [
    {
      label: 'actor',
      value: imdbLink(actor, imdbId),
    },
    {
      label: 'film',
      value: title,
    },
    {
      label: 'year',
      value: year,
    },
  ];

  return (
    <div
      css={css`
        a {
          display: inline-block;
          padding-bottom: 0.05em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);

          &:hover {
            border-bottom-color: rgba(255, 255, 255, 0.5);
          }
        }

        @media screen and (max-width: 40em) {
          margin-top: 1em;
        }
      `}
    >
      {details.map(detailItem)}
    </div>
  );
};

const Quote = ({ quote }: { quote: string }) => {
  return (
    <Text
      as="blockquote"
      fontFamily="serif"
      fontSize={2}
      fontWeight={400}
      mb={1}
      css={css`
        font-style: italic;
        text-indent: -0.5em;
      `}
    >
      &ldquo;
      <span dangerouslySetInnerHTML={{ __html: quote }} />
      &rdquo;
    </Text>
  );
};

export default ({ scene }: { scene: Scene }) => (
  <div
    css={{
      paddingTop: '1.5rem',
    }}
  >
    <Quote quote={scene.formattedQuote} />
    <Details scene={scene} />
  </div>
);
