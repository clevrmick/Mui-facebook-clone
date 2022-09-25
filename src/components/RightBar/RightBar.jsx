import React from 'react';
import { Box } from '@mui/material';
const RightBar = () => {
  return (
    <Box
      bgcolor="blue"
      p={2}
      flex={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
