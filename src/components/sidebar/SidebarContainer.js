// @flow
import React, { PureComponent } from 'react';
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

class SidebarContainer extends PureComponent<Props, State> {
  state = {
    filmsMode: false,
    filmHeadingsVisible: false,
  };

  enableFilmsMode = (): void => {
    this.setState(
      {
        filmsMode: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            filmHeadingsVisible: true,
          });
        }, 300);
      }
    );
  };

  disableFilmsMode = (): void => {
    this.setState(
      {
        filmHeadingsVisible: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            filmsMode: false,
          });
        }, 300);
      }
    );
  };

  toggleMode = (): void => {
    this.state.filmsMode ? this.disableFilmsMode() : this.enableFilmsMode();
  };

  render() {
    return (
      <Flipper flipKey={this.state.filmsMode}>
        <Sidebar
          onModeToggle={this.toggleMode}
          filmsMode={this.state.filmsMode}
          headingsVisible={this.state.filmHeadingsVisible}
          films={this.props.films}
          currentScene={this.props.sceneId}
        />
      </Flipper>
    );
  }
}

export default SidebarContainer;
