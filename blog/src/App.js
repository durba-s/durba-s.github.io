import Navbar from './components/navbar.js';
//import SampleText from './pages/sample.js';
import Container from '@mui/material/Container';
import { HashRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog/blog.js';
import About from './pages/About/about.js';
import PageNotFound from './pages/pageNotFound/pageNotFound.js';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { useState } from 'react';
//import CustomTabPanel from './components/tablist.js'

function App() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <div className="App">
    <Container maxWidth={false} style={{ padding: 0, background: darkMode ? 'black' : 'white' }}>
    <HashRouter>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Routes>
          <Route path="/" element={<About darkMode={darkMode}/>}/>
          <Route path="/about" element={<About darkMode={darkMode}/>} />
          <Route path="/blog" element={<Blog darkMode={darkMode}/>}/>
          <Route path="*" element={<PageNotFound darkMode={darkMode}/>} />
      </Routes>
    </HashRouter>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
