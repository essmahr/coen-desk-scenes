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
  fragment SceneImageMain on fields_2 {
    image {
      childImageSharp {
        fixed(width: 1200, quality: 100) {
          src
        }
      }
    }
  }

  fragment SceneMain on ScenesJson {
    timestamp
    film
    actor
    imdbId
    multiple
    fields {
      ...SceneImageMain
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
