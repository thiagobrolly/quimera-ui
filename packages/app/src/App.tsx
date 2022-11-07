import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, ThemeProvider } from '@quimera-ui/theme';
import { Router } from './Router';
import { Header } from './components/Layout/Header';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
