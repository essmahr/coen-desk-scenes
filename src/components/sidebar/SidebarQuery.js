// @flow
import React, { type Node } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import assembleData from '../../lib/assembleData';
import dumbMemoize from '../../lib/dumbMemoize';

import type { Film } from '../../types';

const query = graphql`
  {
    allScene(sort: { fields: [film___year], order: ASC }) {
      nodes {
        timestamp
        film {
          title
          id
          year
        }
      }
    }
  }
`;

type Props = {
  render: (films: Array<Film>) => Node,
};

const assembleDataOnce = dumbMemoize(assembleData);

export default (props: Props) => (
  <StaticQuery
    query={query}
    render={data => {
      const { films } = assembleDataOnce(data);
      return props.render(films);
    }}
  />
);
