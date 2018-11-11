import React from 'react';
import { graphql } from 'gatsby';

import assembleData from '../lib/assembleData';

import Page from '../components/Page';
import ScenesPanel from '../components/ScenesPanel';

const IndexPage = ({ data, pathContext }) => {
  const { scene } = pathContext;
  const { films } = assembleData(data, scene);

  return (
    <Page>
      <ScenesPanel films={films} />
    </Page>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allFilmsJson(sort: { fields: [year], order: ASC }) {
      edges {
        node {
          slug
          title
          year
        }
      }
    }
    allScenesJson(sort: { fields: [timestamp], order: ASC }) {
      group(field: film) {
        fieldValue
        edges {
          node {
            ...Scene_thumbnail
          }
        }
      }
    }
  }
`;

// query scenesForFilm($film: [String]) {
//   allScenesJson(filter: {
//     film: {
//     in: $film}
//   }) {
//     edges {
//       node {
//         timestamp
//         film
//       }
//     }
//   }
// }
