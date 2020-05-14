import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }: any) => theme.colors.primary};
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    transition: all 0.25s linear;
  }
  `;
