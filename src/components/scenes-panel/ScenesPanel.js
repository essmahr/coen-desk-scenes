import React, { Component } from 'react';
import { Flipper } from 'react-flip-toolkit';

import SceneThumbnail from './SceneThumbnail';

const ScenesList = props => {
  const scenes = props.films.reduce(
    (scenes, film) => [...scenes, ...film.scenes],
    []
  );

  return (
    <ul>
      {scenes.map(scene => (
        <li key={scene.id}>
          <SceneThumbnail scene={scene} />
        </li>
      ))}
    </ul>
  );
};

const FilmsList = props => {
  return (
    <ul>
      {props.films.map(film => {
        return (
          <li key={film.id}>
            <h1>{film.title}</h1>
            <ul>
              {film.scenes.map(scene => (
                <li>
                  <SceneThumbnail scene={scene} />
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

class ScenesPanel extends Component {
  state = {
    filmsMode: false,
  };

  toggleMode = () => {
    this.setState({
      filmsMode: !this.state.filmsMode,
    });
  };

  render() {
    return (
      <Flipper flipKey={this.state.filmsMode}>
        <button onClick={this.toggleMode}>toggle</button>
        {this.state.filmsMode ? (
          <FilmsList films={this.props.films} />
        ) : (
          <ScenesList films={this.props.films} />
        )}
      </Flipper>
    );
  }
}

export default ScenesPanel;
