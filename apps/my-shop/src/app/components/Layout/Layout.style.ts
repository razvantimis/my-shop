import styled, { createGlobalStyle } from "styled-components";


export const PageLayout = styled.div`
`

export const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: black;
    --red: red;
    --maxWidth: 1000px;
    --product-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
`;
