import React from 'react';

import { Grid } from './layout';
import SceneThumbnail from './SceneThumbnail';

const ScenesList = ({ scenes, currentFilm }) => {
  return (
    <Grid>
      {scenes.map(scene => (
        <SceneThumbnail
          key={scene.id}
          scene={scene}
          highlghted={currentFilm === scene.film.slug}
        />
      ))}
    </Grid>
  );
};

export default ScenesList;
