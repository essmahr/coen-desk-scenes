import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { mobileSidebarHeight } from '../../lib/styles';

const ContentPanel = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      css={{ height: '100%' }}
    >
      <div
        css={`
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        `}
      >
        <Box px={[4, 4, 5, 6]} py={[5, 4]}>
          <div css={{ marginBottom: mobileSidebarHeight }}>{children}</div>
        </Box>
      </div>
    </Flex>
  );
};

export default ContentPanel;
