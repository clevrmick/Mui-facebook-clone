import React from 'react';
import { Box } from '@mui/material';
const RightBar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">hello</Box>
    </Box>
  );
};

export default RightBar;
