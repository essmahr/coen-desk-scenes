import React from 'react';
import ContentPanel from '../components/main/ContentPanel';
import { Heading, Box } from 'rebass';

const NotFoundPage = () => (
  <ContentPanel>
    <Box textAlign="center">
      <Heading fontSize={4} lineHeight="1.3" fontWeight={600} fontFamily="sans">
        404
      </Heading>
      <p>Page not found.</p>
    </Box>
  </ContentPanel>
);

export default NotFoundPage;
