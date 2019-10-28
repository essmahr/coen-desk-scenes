import React from 'react';
import { Box } from 'rebass';

const TextPane = props => (
  <Box lineHeight={1.6} sx={{ maxWidth: '600px', margin: 'auto' }} {...props} />
);

export default TextPane;
