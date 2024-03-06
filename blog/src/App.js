import Navbar from './components/navbar.js';
//import SampleText from './pages/sample.js';
import Container from '@mui/material/Container';
import { HashRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/blog/blog.js';
import About from './pages/about/about.js';
import PageNotFound from './pages/pageNotFound/pageNotFound.js';
//import CustomTabPanel from './components/tablist.js'

function App() {
  return (
    <div className="App">
    <Container maxWidth={false} style={{ padding: 0 }}>
    <HashRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Blog />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
      </Container>
    </div>
  );
}

export default App;
