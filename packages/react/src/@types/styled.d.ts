/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { DefaultThemeProps } from '@quimera-ui/utils';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
