import React from 'react';
import { Flex, Box } from '@rebass/grid';

const ContentPanel = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      css={{ height: '100%' }}
    >
      <div
        className="hello"
        css={`
          overflow-y: auto;
        `}
      >
        <Box px={[4, 4, 5, 6]} pt={4} pb={4}>
          {children}
        </Box>
      </div>
    </Flex>
  );
};

export default ContentPanel;
