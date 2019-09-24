// @flow
import React, { memo } from 'react';
import { graphql } from 'gatsby';

import ScenePanel from '../components/main/ScenePanel/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  console.log(props);
  const { scene, image } = props.data;
  return <ScenePanel scene={scene} image={image} />;
};

export default ScenePage;

export const query = graphql`
  query($film: String!, $timestamp: String!, $image: String!) {
    scene(film: { slug: { eq: $film } }, timestamp: { eq: $timestamp }) {
      timestamp
      actor
      imdbId
      multiple
      formattedQuote
      film {
        slug
        year
        title
      }
    }
    image: file(name: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 540, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
