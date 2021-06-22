import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "BYekan";
    src: url("fonts/BYekan-webfont.eot") format("eot"),
      url("fonts/BYekan-webfont.ttf") format("ttf"),
      url("fonts/BYekan-webfont.woff") format("woff");
    font-style: normal;
    font-weight: normal;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    font-family:"BYekan",Arial, sans-serif;
    transition: all 0.50s linear;
    caret-color:${({ theme }) => theme.accent};
  }
  button:focus {
    outline: none;
  }
  a {
    text-decoration: none !important;
    color: inherit;
  }
  `;
