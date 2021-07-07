import React from "react";
import styled from "styled-components";
import { LightenDarkenColor } from "../utils/colorHelper";
import Icon from "./shared/Icon";

const Wraper = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  margin-top: 3rem;
  div:first-child {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
  }
  & ul li a {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    transition: all 200ms linear;
  }
  & ul li a:hover {
    color: ${({ theme }) => LightenDarkenColor(theme.accent, 50)};
  }
  ul:nth-child(3) li:first-child a {
    width: 139px;
    height: 24px;
    background: ${({ theme }) =>
      theme.isDark
        ? "url(images/digiato-dark.jpg)"
        : "url(images/digiato.png)"};
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    background-size: contain;
  }
  ul:nth-child(3) li:last-child a {
    width: 139px;
    height: 24px;
    background: ${({ theme }) =>
      theme.isDark
        ? "url(images/rooziato-dark.jpg)"
        : "url(images/rooziato.png)"};
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    background-size: contain;
  }
  ul:nth-child(3) {
    margin-right: auto;
  }
  ul:nth-child(2) {
    margin-right: 1rem;
  }
  ul:nth-child(2) a {
    padding: 0 0.3rem;
  }
`;

const Footer = () => {
  return (
    <Wraper>
      <div className="container-fluid py-2">
        <div className="row justify-content-center m-0 w-100">
          <ul className="row mb-3 mb-lg-0">
            <li className="col-6 col-lg-auto p-0">
              <a href="#">صفحه ی اصلی</a>
            </li>
            <li className="col-6 col-lg-auto p-0">
              <a href="#">تماس با ما</a>
            </li>
            <li className="col-6 col-lg-auto p-0">
              <a href="#">فرصت های شغلی</a>
            </li>
            <li className="col-6 col-lg-auto p-0">
              <a href="#">بایگانی</a>
            </li>
          </ul>
          <ul className="mb-3 mb-lg-0">
            <li>
              <a href="#">
                <Icon icon="telegram" size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="instagram" size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="twitter" size={20} />
              </a>
            </li>
          </ul>
          <ul className="ml-0 ml-lg-auto">
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </Wraper>
  );
};

export default Footer;
