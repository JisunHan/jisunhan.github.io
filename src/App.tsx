import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
