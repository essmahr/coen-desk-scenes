// @flow
import React, { Component } from 'react';
import { Flipper } from 'react-flip-toolkit';

import { type Film } from '../../types';

import ScenesPanel from './ScenesPanel';

type Props = {
  films: Array<Film>,
};

type State = {
  filmsMode: boolean,
};

class ScenesPanelContainer extends Component<Props, State> {
  state = {
    filmsMode: true,
  };

  toggleMode = (): void => {
    this.setState({
      filmsMode: !this.state.filmsMode,
    });
  };

  render() {
    return (
      <Flipper flipKey={this.state.filmsMode}>
        <ScenesPanel
          onModeToggle={this.toggleMode}
          filmsMode={this.state.filmsMode}
          films={this.props.films}
        />
      </Flipper>
    );
  }
}

export default ScenesPanelContainer;
