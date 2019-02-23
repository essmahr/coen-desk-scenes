// @flow
import React from 'react';
import { css } from 'emotion';
import { type Scene, type Film } from '../../../types';

import { mainContainer } from '../../../lib/styles';
import SceneDetails from './SceneDetails';

const ScenePanel = function({ scene, film }: { scene: Scene, film: Film }) {
  const imgSrc = scene.fields.image.childImageSharp.fixed.src;
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        justify-content: center;
        margin-top: 0.5rem;
        height: calc(100% - 1rem);
      `}
    >
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div className={mainContainer}>
          <img src={imgSrc} alt="alt" />
          <SceneDetails scene={scene} film={film} />
        </div>
      </div>
    </div>
  );
};

export default ScenePanel;
