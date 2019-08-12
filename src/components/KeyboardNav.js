// @flow
import { Component } from 'react';
import { navigate } from 'gatsby-link';
import throttle from 'lodash.throttle';

type Props = {
  pagination: {
    next: String,
    previous: String,
  },
};

class KeyboardNav extends Component<Props> {
  constructor(props) {
    super(props);
    this.debouncedKeyDown = throttle(this.handleKeyDown, 500, {
      leading: true,
      trailing: false,
    });
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.debouncedKeyDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.debouncedKeyDown);
  };

  handleKeyDown = (event: Object) => {
    if (!this.props.pagination) return;

    const { previous, next } = this.props.pagination;
    switch (event.keyCode) {
      case 27:
        navigate('/');
        break;
      case 37:
      case 38:
        navigate(previous);
        break;
      case 39:
      case 40:
        navigate(next);
        break;
      default:
        return;
    }
  };

  render() {
    return null;
  }
}

export default KeyboardNav;
