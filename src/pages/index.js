import React from 'react';
import { graphql } from 'gatsby';
import Page from '../components/Page';

import ScenesList from '../components/ScenesList';

const IndexPage = ({ data }) => {
  return (
    <Page>
      <ScenesList scenes={data.allScenesJson.edges} />
    </Page>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allFilmsJson {
      edges {
        node {
          slug
          title
          year
        }
      }
    }
    allScenesJson {
      edges {
        node {
          ...Scene_thumbnail
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
