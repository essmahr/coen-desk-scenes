// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ImageSeo from '../components/ImageSeo';
import ScenePanel from '../components/main/ScenePanel/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  const { scene } = props.data;
  const { film, timestamp, image } = scene;
  const socialImage = image.meta.fixed;
  return (
    <>
      <Helmet title={`${film.title} at ${timestamp}`}>
        <ImageSeo image={socialImage} />
      </Helmet>
      <ScenePanel scene={props.data.scene} />
    </>
  );
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
        meta: childImageSharp {
          fixed(width: 1200) {
            src
            width
            height
          }
        }
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
