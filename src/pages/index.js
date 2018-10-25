import React from 'react';
import { graphql } from 'gatsby';

import assembleData from '../lib/assembleData';

import Page from '../components/Page';
import ColumnDelegator from '../components/ColumnDelegator';
import ScenesList from '../components/ScenesList';
import SceneModal from '../components/SceneModal';
import FilmsListContainer from '../components/FilmsListContainer';
import KeyboardCapture from '../components/KeyboardCapture';

const IndexPage = ({ data, pathContext }) => {
  const { film: currentFilm, scene } = pathContext;
  const { films, scenes, currentSceneIndex } = assembleData(data, scene);

  return (
    <Page>
      <ColumnDelegator
        main={<ScenesList scenes={scenes} currentFilm={currentFilm} />}
        sidebar={<FilmsListContainer films={films} currentFilm={currentFilm} />}
      />
      {currentSceneIndex !== null && (
        <KeyboardCapture currentIndex={currentSceneIndex} scenes={scenes}>
          <SceneModal scene={scenes[currentSceneIndex]} />
        </KeyboardCapture>
      )}
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
