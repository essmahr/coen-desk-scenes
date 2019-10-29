// @flow
import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'rebass';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.6rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.sans};
  display: flex;
  line-height: 1;
  flex-direction: column;
  letter-spacing: 0.02em;
  justify-content: center;
  z-index: 1;
`;

const AnimatedHeader = animated(Header);

export default function MiniHeader({ visible }: { visible: boolean }) {
  const transitions = useTransition(visible, null, {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    enter: () => next =>
      setTimeout(() => next({ transform: 'translateY(0%)', opacity: 1 }), 500),
    leave: () => next =>
      setTimeout(
        () => next({ transform: 'translateY(-110%)', opacity: 0 }),
        500
      ),
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedHeader key={key} style={props}>
          <Box p={4}>
            <Link to="/">E. C. A. B. a D. in a C. B. F.</Link>
          </Box>
        </AnimatedHeader>
      )
  );
}
