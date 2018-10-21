import React from 'react';

import { Grid } from './layout';
import SceneThumbnail from './SceneThumbnail';

const ScenesList = ({ scenes }) => {
  return (
    <Grid>
      {scenes.map(scene => (
        <SceneThumbnail key={scene.id} scene={scene} />
      ))}
    </Grid>
  );
};

export default ScenesList;
