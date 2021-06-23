import React, { useState } from "react";
import styled from "styled-components";
import { LightenDarkenColor } from "../utils/colorHelper";
import Toggle from "./shared/Toggler";

const Wraper = styled.header`
  position: fixed;
  top: 0;
  display: block;
  width: 100%;
  transition: all 200ms ease-in-out;
`;

const TopBar = styled.nav`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  transition: all 200ms ease-in-out;
  & ul {
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    width: 100%;
    margin: 0;
  }
  li {
    position: relative;
  }
  a {
    display: block;
    padding: 0.5rem 1rem;
    transition: all 200ms linear;
  }
  a:hover {
    color: ${({ theme }) => LightenDarkenColor(theme.accent, 50)};
  }
`;
const Header = (props) => {
  const { theme, toggleTheme } = props;

  return (
    <Wraper id="header">
      <TopBar>
        <ul>
          <li>
            <a href="">پلی استیشن ۵</a>
          </li>
          <li>
            <a href="">ایکس‌ باکس سری ایکس</a>
          </li>
          <li>
            <a href="">سریال ایرانی</a>
          </li>
          <li>
            <a href="">بهترین بازی سال</a>
          </li>
          <li>
            <a href="">توییچ</a>
          </li>
          <li className="ml-auto">
            <Toggle theme={theme} toggle={toggleTheme} />
          </li>
        </ul>
      </TopBar>
    </Wraper>
  );
};

export default Header;
