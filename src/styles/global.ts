import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px / 16px = 62.5% -> 1rem = 10px
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }
`
