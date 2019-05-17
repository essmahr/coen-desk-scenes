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
          fluid(
            maxWidth: 540
            quality: 90
            traceSVG: {
              color: "#111111"
              turdSize: 10
              threshold: 120
              turnPolicy: TURNPOLICY_MINORITY
              blackOnWhite: false
            }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
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
