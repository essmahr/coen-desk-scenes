// @flow
import React, { Component } from 'react';
import { Flipper } from 'react-flip-toolkit';

import { type Film } from '../../types';

import Sidebar from './Sidebar';

type Props = {
  films: Array<Film>,
  sceneId: ?string,
};

type State = {
  filmsMode: boolean,
  filmHeadingsVisible: boolean,
};

class SidebarContainer extends Component<Props, State> {
  state = {
    filmsMode: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sceneId !== this.props.sceneId) {
      return true;
    }

    if (nextState.filmsMode !== this.state.filmsMode) {
      return true;
    }

    return false;
  }

  toggleMode = (): void => {
    this.setState({
      filmsMode: !this.state.filmsMode,
    });
  };

  render() {
    return (
      <Flipper flipKey={this.state.filmsMode}>
        <Sidebar
          onModeToggle={this.toggleMode}
          filmsMode={this.state.filmsMode}
          films={this.props.films}
          currentScene={this.props.sceneId}
        />
      </Flipper>
    );
  }
}

export default SidebarContainer;
