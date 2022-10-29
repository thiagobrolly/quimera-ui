import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box
  }

  html {

    /* @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) { 
      font-size: 87.5%; // 14px
    } */
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${defaultTheme.font.family.primary};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px
  }

  ::-webkit-scrollbar-track-piece {
    background-color: ${defaultTheme.colors.gray_60};
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4e5872;
    border-radius: 2px;
  }
`;
