import styled from 'styled-components';
import { background } from '../../colors';

const ImageContainer = styled.div(
  {
    backgroundColor: background,

    '.gatsby-image-wrapper': {
      opacity: 0.5,
      borderRadius: 3,
      filter: 'grayscale(40%)',
    },
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        '.gatsby-image-wrapper': {
          opacity: 0.9,
          filter: 'grayscale(0%)',
        },
      };
    } else {
      return {
        '.gatsby-image-wrapper': {
          opacity: 0.4,
        },
        '&:hover': {
          '.gatsby-image-wrapper': {
            opacity: 0.5,
          },
        },
      };
    }
  }
);

export default ImageContainer;
