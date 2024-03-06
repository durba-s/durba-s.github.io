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

function Navbar() {
  const currentValue = window.location.pathname.split('/')[1]
  const [value, setValue] = React.useState(currentValue);
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    navigate(newValue)
    setValue(newValue)
  };

  return (
    <Container maxWidth={false} style={{ padding: 0}}>
        <AppBar component="nav" style={{opacity: "0.8"}}>
        <Toolbar variant="regular" style={{background: "#f2f5fc", color: "Black", height: "100%"}}>  
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box width={"50%"}>
            <Typography variant="h6" color="inherit" component="div" paddingTop={'10px'}>
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
          </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;
