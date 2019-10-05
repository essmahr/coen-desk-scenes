import React from 'react';
import { Flex, Box } from 'rebass';
import { mobileSidebarHeight } from '../../lib/styles';

const ContentPanel = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      sx={{ height: '100%' }}
    >
      <div
        sx={{
          overflowY: 'auto',
          '-webkit-overflow-scrolling': 'touch',
        }}
      >
        <Box px={[4, 4, 5, 6]} py={[5, 4]}>
          <div
            sx={{
              '@media screen and (max-width: calc(40em - 1px))': {
                marginBottom: mobileSidebarHeight,
              },
            }}
          >
            {children}
          </div>
        </Box>
      </div>
    </Flex>
  );
};

export default ContentPanel;
