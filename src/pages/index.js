// @flow
import React from 'react';
import { type Scene, type Film } from '../types';

import Lander from '../components/main/Lander';
import ScenePanel from '../components/main/ScenePanel';

type Props = {
  pageContext: {
    scene?: Scene,
    film?: Film,
  },
};

const IndexPage = (props: Props) => {
  const { scene } = props.pageContext;

  if (scene) return <ScenePanel scene={scene} />;

  return <Lander />;
};

export default IndexPage;
