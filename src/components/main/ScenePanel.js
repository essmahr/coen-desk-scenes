// @flow

import React from 'react';

import type { Scene } from '../../types';

const ScenePanel = function({ scene }: { scene: Scene }) {
  return <div>{scene.timestamp}</div>;
};

export default ScenePanel;
