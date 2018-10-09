import React from 'react';

import { Container, Grid } from './layout';
import SceneThumbnail from './SceneThumbnail';

const ScenesList = ({ scenes }) => {
  return (
    <Container component="main">
      <Grid>
        {scenes.map(({ node }) => (
          <SceneThumbnail key={node.id} node={node} />
        ))}
      </Grid>
    </Container>
  );
};

export default ScenesList;
