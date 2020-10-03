import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@200;400;500;700&display=swap');
    * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 99;
    position:relative;
  }
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'Spartan', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.textMain};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    font-family: 'Spartan', sans-serif;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

`

export default GlobalStyles
