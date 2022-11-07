import { themes } from '@storybook/theming';
import { GlobalStyles, ThemeProvider } from '@quimera-ui/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs:  {
    theme: themes.dark
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];