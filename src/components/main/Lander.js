// @flow
import React from 'react';
import { Flex, Heading } from 'rebass';

import { mobileContentHeight } from '../../lib/styles';

const Lander = () => (
  <Flex
    as="header"
    flexDirection="column"
    justifyContent="center"
    p={4}
    pl={[4, 5]}
    height={[mobileContentHeight, '100%']}
  >
    <Heading
      fontSize={[4, 5]}
      lineHeight="1.3"
      fontWeight={600}
      fontFamily="serif"
      sx={{ maxWidth: '18em' }}
    >
      Every character actor behind a desk in a Coen Brothers film
    </Heading>
  </Flex>
);

export default Lander;
