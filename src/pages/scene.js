// @flow
import React from 'react';
import { graphql } from 'gatsby';

import ScenePanel from '../components/main/ScenePanel/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  const scene = props.data.scenesJson;
  const film = props.data.filmsJson;

  return <ScenePanel scene={scene} film={film} />;
};

export default ScenePage;

export const query = graphql`
  fragment SceneMain on ScenesJson {
    timestamp
    film
    actor
    imdbId
    multiple
    fields {
      image {
        childImageSharp {
          fluid(maxWidth: 540, quality: 90) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      formattedQuote
    }
  }

  query($film: String!, $timestamp: String!) {
    scenesJson(film: { eq: $film }, timestamp: { eq: $timestamp }) {
      ...SceneMain
    }
    filmsJson(slug: { eq: $film }) {
      title
      year
    }
  }
`;
