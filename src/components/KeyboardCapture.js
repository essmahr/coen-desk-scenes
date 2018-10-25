import { Component } from 'react';
import { navigate } from 'gatsby';
import { sceneRoute } from '../lib/routes';

class KeyboardCapture extends Component {
  handleKeydown = ({ key }) => {
    switch (key) {
      case 'ArrowLeft':
        this.navigatePrevious();
        break;
      case 'ArrowRight':
        this.navigateNext();
        break;
      case 'Escape':
        navigate('/');
        break;
      default:
    }
  };

  navigatePrevious() {
    const { scenes, currentIndex } = this.props;
    const newIndex = currentIndex === 0 ? scenes.length - 1 : currentIndex - 1;
    navigate(sceneRoute(scenes[newIndex]));
  }

  navigateNext() {
    const { scenes, currentIndex } = this.props;
    const newIndex = currentIndex === scenes.length - 1 ? 0 : currentIndex + 1;
    navigate(sceneRoute(scenes[newIndex]));
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    return this.props.children;
  }
}

export default KeyboardCapture;
