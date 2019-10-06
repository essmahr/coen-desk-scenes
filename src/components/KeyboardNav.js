// @flow
import { Component } from 'react';
import { navigate } from 'gatsby-link';
import rateLimit from '../lib/rateLimit';

type Props = {
  pagination: {
    next: String,
    previous: String,
  },
};

class KeyboardNav extends Component<Props> {
  constructor(props) {
    super(props);
    this.throttledKeyDown = rateLimit(this.handleKeyDown, 500);
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.throttledKeyDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.throttledKeyDown);
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
