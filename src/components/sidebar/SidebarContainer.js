// @flow
import React, { Component } from 'react';
import { Flipper } from 'react-flip-toolkit';

import { type Film } from '../../types';

import Sidebar from './Sidebar';

type Props = {
  films: Array<Film>,
};

type State = {
  filmsMode: boolean,
};

class SidebarContainer extends Component<Props, State> {
  state = {
    filmsMode: true,
  };

  toggleMode = (): void => {
    console.log(this.state.filmsMode);

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
        />
      </Flipper>
    );
  }
}

export default SidebarContainer;
