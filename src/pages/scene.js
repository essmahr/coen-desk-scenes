// @flow
import React, { memo } from 'react';
import { graphql } from 'gatsby';

import ScenePanel from '../components/main/ScenePanel/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  const { scene } = props.data;
  return <ScenePanel scene={scene} />;
};

export default memo(ScenePage);

export const query = graphql`
  query($film: String!, $timestamp: String!) {
    scene(film: { eq: $film }, timestamp: { eq: $timestamp }) {
      timestamp
      film
      actor
      imdbId
      multiple
      formattedQuote
      fields {
        image {
          childImageSharp {
            fluid(maxWidth: 540, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
