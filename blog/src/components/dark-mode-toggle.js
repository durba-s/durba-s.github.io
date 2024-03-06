import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <IconButton color={darkMode ? "white" : "black"} onClick={toggleDarkMode}>
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkModeToggle;

