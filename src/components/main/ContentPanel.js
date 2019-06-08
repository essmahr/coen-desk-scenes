import React from 'react';
import { Flex, Box } from '@rebass/grid';

const ContentPanel = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      css={`
        overflow-y: auto;
        height: 100%;
      `}
    >
      <Box px={[2, 4, 5, 6]} pt={4}>
        {children}
      </Box>
    </Flex>
  );
};

export default ContentPanel;
