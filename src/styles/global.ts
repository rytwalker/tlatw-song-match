import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }: any) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.primaryFont};
    transition: all 0.25s linear;
  }
  `;
