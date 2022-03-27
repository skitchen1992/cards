import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';

const AppHeader: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={classes.root}>
      <Box sx={classes.title}>
        <span style={{ color: '#9F0013' }}>Marvel</span> information portal
      </Box>
    </Box>
  );
};

export default AppHeader;
