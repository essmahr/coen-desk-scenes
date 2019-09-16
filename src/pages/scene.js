// @flow
import React from 'react';
import { graphql } from 'gatsby';

import ScenePanel from '../components/main/ScenePanel/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  return <ScenePanel scene={props.data.scene} />;
};

export default ScenePage;

export const query = graphql`
  query($film: String!, $timestamp: String!) {
    scene(film: { slug: { eq: $film } }, timestamp: { eq: $timestamp }) {
      timestamp
      actor
      imdbId
      multiple
      formattedQuote
      image {
        childImageSharp {
          fluid(maxWidth: 540, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      film {
        slug
        year
        title
      }
    }
  }
`;
