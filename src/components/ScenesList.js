import React from 'react';

import { Container, Grid } from './layout';
import SceneThumbnail from './SceneThumbnail';

const ScenesList = ({ scenes }) => {
  return (
    <Container component="main">
      <Grid>
        {scenes.map(scene => (
          <SceneThumbnail key={scene.id} scene={scene} />
        ))}
      </Grid>
    </Container>
  );
};

export default ScenesList;
