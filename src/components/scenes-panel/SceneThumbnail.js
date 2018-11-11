import React from 'react';
import { Flipped } from 'react-flip-toolkit';

export default function SceneThumbnail(props) {
  const { scene } = props;

  return (
    <Flipped flipId={scene.id}>
      <div>
        <img
          src={scene.fields.thumbnail.childImageSharp.small.src}
          alt={scene.timestamp}
        />
      </div>
    </Flipped>
  );
}
