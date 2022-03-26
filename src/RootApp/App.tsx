import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import decoration from '../resources/img/vision.png';
import CharList from './CharList/CharList';
import useStyles from './styles';
import Box from '@mui/material/Box';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={classes.root}>
      <AppHeader />
      <CharList />
      <Box sx={classes.bgDecoration}>
        <img src={decoration} alt="vision" />
      </Box>
    </Box>
  );
};

export default App;
