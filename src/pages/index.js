import React from 'react';
import { graphql } from 'gatsby';

import assembleData from '../lib/assembleData';

import Page from '../components/Page';
import ScenesList from '../components/ScenesList';
import FilmsList from '../components/FilmsList';
const IndexPage = ({ data }) => {
  const { films, scenes } = assembleData(data);

  return (
    <Page>
      <FilmsList films={films} />
      <div style={{ marginLeft: '200px' }}>
        <ScenesList scenes={scenes} />
      </div>
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
