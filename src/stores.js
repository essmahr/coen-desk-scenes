import { Container } from 'unstated';

class filmHoverState extends Container {
  state = {
    hovered: null,
  };

  setHovered = slug => {
    if (slug === this.state.hovered) return;

    this.setState({
      hovered: slug,
    });
  };

  setUnHovered = () => {
    this.setState({
      hovered: null,
    });
  };
}

class sidebarState extends Container {
  state = {
    sidebarOpen: false,
  };

  openSidebar = () => {
    this.setState({
      sidebarOpen: true,
    });
  };

  closeSidebar = () => {
    this.setState({
      sidebarOpen: false,
    });
  };

  toggleSidebar = () => {
    this.setState(state => ({
      sidebarOpen: !state.sidebarOpen,
    }));
  };
}

export { filmHoverState, sidebarState };
