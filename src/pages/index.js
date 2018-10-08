import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import ScenesList from '../components/ScenesList';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <h2>Films</h2>
      <ScenesList scenes={data.allScenesJson.edges} />
    </Layout>
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
