import React from 'react';
import { graphql } from 'gatsby';

import assembleData from '../lib/assembleData';

import Page from '../components/Page';
import ColumnDelegator from '../components/ColumnDelegator';
import ScenesList from '../components/ScenesList';
import FilmsListContainer from '../components/FilmsListContainer';
const IndexPage = ({ data, pathContext }) => {
  const { film: currentFilm } = pathContext;
  const { films, scenes } = assembleData(data);

  return (
    <Page>
      <ColumnDelegator
        main={<ScenesList scenes={scenes} currentFilm={currentFilm} />}
        sidebar={<FilmsListContainer films={films} currentFilm={currentFilm} />}
      />
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
