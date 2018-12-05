// @flow
import React from 'react';
import { graphql } from 'gatsby';

import { type Scene } from '../types';

import Lander from '../components/main/Lander';
import ScenePanel from '../components/main/ScenePanel';

type Props = {
  pageContext: {
    scene?: Scene,
  },
};

const IndexPage = (props: Props) => {
  const { scene } = props.pageContext;

  console.log(scene);

  if (scene) return <ScenePanel scene={scene} />;

  return <Lander />;
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
