// @flow
import React from 'react';
import { graphql } from 'gatsby';
// import { type Scene, type Film } from '../types';

import ScenePanel from '../components/main/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  console.log(props);

  const scene = props.data.scenesJson;
  const film = props.data.filmsJson;

  return <ScenePanel scene={scene} film={film} />;
};

export default ScenePage;

export const query = graphql`
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
