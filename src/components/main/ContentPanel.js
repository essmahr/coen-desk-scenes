import React from 'react';
import { Flex, Box } from 'rebass';
import { mobileSidebarHeight } from '../../lib/styles';

const ContentPanel = ({ children }) => {
  return (
    <Flex flexDirection="column" justifyContent="center" height="100%">
      <div
        css={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <Box px={[4, 4, 5, 6]} pt={[5, 5, 5, 5]} pb={[0, 5, 5]}>
          <div
            css={{
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
