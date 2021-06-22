import React from "react";
import styled from "styled-components";
import Toggle from "../shared/Toggler";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

const TopBar = styled.nav`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  ul {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    width: 100%;
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
    color: ${({ theme }) => theme.accent};
  }
`;

const MainLayout = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <Header>
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
      </Header>
      <>{children}</>
    </>
  );
};

export default MainLayout;
