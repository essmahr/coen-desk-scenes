// @flow
import React from 'react';
import { graphql } from 'gatsby';

import { type ScenesJson, type FilmsJson, type Scene } from '../types';

import assembleData from '../lib/assembleData';

import Page from '../components/Page';
import ScenesPanel from '../components/scenes-panel/ScenesPanel';

type Props = {
  data: {
    allFilmsJson: FilmsJson,
    allScenesJson: ScenesJson,
  },
  pageContext: {
    scene: Scene,
  },
};

const IndexPage = ({ data, pageContext }: Props) => {
  const { scene } = pageContext;
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
