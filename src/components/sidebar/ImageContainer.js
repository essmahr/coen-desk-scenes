import styled from '@emotion/styled';

const ImageContainer = styled.div(
  {
    position: 'relative',
    backgroundColor: ({ theme }) => theme.colors.background,
    filter: 'grayscale(20%)',

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
  },
  ({ isCurrent }) => {
    if (isCurrent) {
      return {
        '&::before': {
          opacity: 0.4,
        },

        img: {
          opacity: 0.9,
        },
      };
    } else {
      return {
        img: {
          opacity: 0.5,
        },
        '&:hover': {
          img: {
            opacity: 0.7,
          },
        },
      };
    }
  }
);

export default ImageContainer;
