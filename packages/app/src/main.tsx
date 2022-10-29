import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles, ThemeProvider } from '@quimera-ui/utils';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ProviderStyledComponents theme={defaultTheme}> */}
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    {/* </ProviderStyledComponents> */}
  </React.StrictMode>,
);
