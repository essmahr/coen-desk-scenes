import React from 'react';

import SceneThumbnail from './SceneThumbnail';

const ScenesList = ({ scenes }) => {
  return (
    <div>
      {scenes.map(({ node }) => (
        <SceneThumbnail key={node.id} node={node} />
      ))}
    </div>
  );
};

export default ScenesList;
