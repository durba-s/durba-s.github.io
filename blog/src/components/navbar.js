import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './dark-mode-toggle';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

function Navbar({ darkMode, toggleDarkMode }) {
  const currpath = window.location.href.toString().includes('about') ? 'about' : 'blog';
  const [value, setValue] = React.useState(currpath);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container maxWidth={false} style={{ padding: 0 }}>
      <AppBar component="nav">
        <Toolbar variant="regular" style={{ 
          background: darkMode ? 'black' : '#f2f5fc', 
          color: darkMode ? 'white' : 'black', 
          height: '100%' 
          }}>
          <Container>
            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item xs={4}>
                <Box width={"100%"}>
                  <Typography variant="h6" color="inherit" component="div" paddingTop={'8px'}>
                    <b>Durba</b> Satpathi
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box width={"100%"}>
                  <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="tabs example"
                      indicatorColor="secondary"
                      textColor='secondary'
                      variant='fullWidth'
                      >
                      <Tab value="blog" label="Blog"/>
                      <Tab value="about" label="About" />
                  </Tabs>
                </Box>
              </Grid>
              <Grid item xs={4} style={{ textAlign: 'end' }}>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
    </ThemeProvider>
  );
}

export default Navbar;
