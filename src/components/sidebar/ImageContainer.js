import styled from 'styled-components';
import * as eases from '../../lib/easings';
import { background } from '../../colors';

const ImageContainer = styled.div(
  {
    backgroundColor: background,

    '.gatsby-image-wrapper': {
      transition: `opacity 300ms ${eases.easeInOutSine}`,
      opacity: 0.5,
      borderRadius: 3,
    },
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        '.gatsby-image-wrapper': {
          opacity: 0.8,
        },
      };
    } else {
      return {
        '&:hover': {
          '.gatsby-image-wrapper': {
            opacity: 0.6,
          },
        },
      };
    }
  }
);

export default ImageContainer;
