import { createGlobalStyle } from "styled-components";
import { LightenDarkenColor } from "./colorHelper";
export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    font-family:"BYekan",Arial, sans-serif;
    transition: all 0.50s linear;
    caret-color:${({ theme }) => theme.accent};
  }
  @media (min-width: 577px) {
    body::-webkit-scrollbar {
    height: 10px;
  }
  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.secondary};
  }
  body::-webkit-scrollbar-thumb {
    background-color: #888;
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  }
  button:focus {
    outline: none;
  }
  a {
    text-decoration: none !important;
    color: inherit;
  }
  #header.float-header {
    box-shadow: 0 2px 12px -4px rgb(0 0 0 / 30%);
  }
  #header.float-header .dark-layer {
    background:${({ theme }) => theme.primary};
  }
  #header.float-header .dark-layer nav ul {
    color: ${({ theme }) => theme.text};
  }
  #header.float-header  a.dropdowwn-toggle:hover::after {
    background-color: ${({ theme }) => LightenDarkenColor(theme.accent, 20)};
  }
  #header.float-header  a.dropdowwn-toggle::after {
    background-color: ${({ theme }) => theme.text};
  }
  .btn-primary {
    color: #fff;
    background-color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
}
  .btn-primary:hover {
    color: #fff;
    background-color: ${({ theme }) => LightenDarkenColor(theme.accent, -20)};
    border-color: ${({ theme }) => LightenDarkenColor(theme.accent, -20)};
}
  .btn-secondary {
    color: #212529;
    background-color: #dee2e6;
    border-color: #dee2e6;
}
  .btn-secondary:hover {
    color: #212529;
    background-color: #C8CFD6;
    border-color: #C8CFD6;
}
.bp3-overlay {
  z-index: 100;
}
@media (min-width: 577px) {
  .bp3-drawer-body::-webkit-scrollbar {
    height: 10px;
  }
  .bp3-drawer-body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.secondary};
  }
  .bp3-drawer-body::-webkit-scrollbar-thumb {
    background-color: #888;
  }
  .bp3-drawer-body::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  }
  .bp3-drawer{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }
  .bp3-drawer.bp3-position-left {
    width: inherit;
  }
  *:focus{
    outline: none;
    outline-offset: 0;
  }
  .bp3-menu {
    text-align: right;
  }
  .bp3-menu,.bp3-popover2 .bp3-popover2-content{
    background:${({ theme }) => theme.primary};
    color:${({ theme }) => theme.text};
  }
  .bp3-popover2 .bp3-popover2-arrow-fill {
    fill:${({ theme }) => theme.primary};
}
.bp3-menu-item.bp3-active{
    background-color:${({ theme }) => theme.accent} !important;
    color:#fefefe;
}
  `;
