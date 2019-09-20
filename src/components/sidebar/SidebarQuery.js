// @flow
import React, { type Node } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import assembleData from '../../lib/assembleData';
import dumbMemoize from '../../lib/dumbMemoize';

import type { Film } from '../../types';

const query = graphql`
  {
    allFilm(sort: { fields: year }) {
      nodes {
        title
        slug
        scenes {
          id
          timestamp
          film {
            slug
          }
        }
      }
    }
  }
`;

type Props = {
  render: (films: Array<Film>) => Node,
};

export default (props: Props) => (
  <StaticQuery
    query={query}
    render={data => {
      return props.render(data.allFilm.nodes);
    }}
  />
);
