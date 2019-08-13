import styled from 'styled-components';
import { background } from '../../colors';

const ImageContainer = styled.div(
  {
    backgroundColor: background,
    filter: 'grayscale(40%)',

    img: {
      opacity: 0.5,
      borderRadius: 3,
    },
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        filter: 'grayscale(0%)',

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
