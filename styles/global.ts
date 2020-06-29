import { createGlobalStyle } from 'styled-components';
const GlobalStyle =  createGlobalStyle`
     *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #f7faff;
    color: #353535;
    text-rendering: optimizeLegibility;
  }
  body, input, button {
    font-family: 'Exo 2', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;