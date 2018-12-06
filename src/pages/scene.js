// @flow
import React from 'react';
import { graphql } from 'gatsby';
// import { type Scene, type Film } from '../types';

import ScenePanel from '../components/main/ScenePanel';

type Props = {
  data: Object,
};

const ScenePage = (props: Props) => {
  const scene = props.data.scenesJson;

  return <ScenePanel scene={scene} />;
};

export default ScenePage;

export const query = graphql`
  query($film: String!, $timestamp: String!) {
    scenesJson(film: { eq: $film }, timestamp: { eq: $timestamp }) {
      ...SceneMain
    }
  }
`;
