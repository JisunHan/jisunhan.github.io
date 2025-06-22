import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme as any}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
