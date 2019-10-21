import styled from '@emotion/styled';
import { background } from '../../colors';

const ImageContainer = styled.div(
  {
    position: 'relative',
    backgroundColor: background,
    filter: 'grayscale(40%)',

    '&::before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      border: '2px solid white;',
      opacity: 0,
      borderRadius: 3,
      pointerEvents: 'none',
      transition: 'opacity 0.2s ease',
    },

    img: {
      opacity: 0.5,
      borderRadius: 3,
    },
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        filter: 'grayscale(0%)',

        '&::before': {
          opacity: 0.3,
        },

        img: {
          opacity: 0.9,
        },
      };
    } else {
      return {
        img: {
          opacity: 0.4,
        },
        '&:hover': {
          img: {
            opacity: 0.5,
          },
        },
      };
    }
  }
);

export default ImageContainer;
