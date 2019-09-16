// @flow
import React, { type Node } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import assembleData from '../../lib/assembleData';
import dumbMemoize from '../../lib/dumbMemoize';

import type { Film } from '../../types';

// const query = graphql`
//   {
//     allFilmsJson(sort: { fields: [year], order: ASC }) {
//       edges {
//         node {
//           slug
//           title
//           year
//         }
//       }
//     }
//     allScenesJson(sort: { fields: [timestamp], order: ASC }) {
//       group(field: film) {
//         fieldValue
//         edges {
//           node {
//             id
//             ...Scene_thumbnail
//           }
//         }
//       }
//     }
//   }
// `;

type Props = {
  render: (films: Array<Film>) => Node,
};

const assembleDataOnce = dumbMemoize(assembleData);

export default (props: Props) => (
  <h1>hello</h1>
  // <StaticQuery
  //   query={query}
  //   render={data => {
  //     const { films } = assembleDataOnce(data);
  //     return props.render(films);
  //   }}
  // />
);
