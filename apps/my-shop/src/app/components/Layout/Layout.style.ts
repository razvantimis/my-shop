import styled, { createGlobalStyle } from "styled-components";


export const PageLayout = styled.div`
  height: 100%;
  width: 100%;
`

export const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: black;
    --red: #b80000;
    --red-light: #ff3434;
    --maxWidth: 1000px;
    --product-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
  }

  #root, html, body {
    height: 100%;
    width: 100%;
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
