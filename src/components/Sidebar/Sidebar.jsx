import { Box } from '@mui/material';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      bgcolor="green"
      p={2}
      flex={1}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
