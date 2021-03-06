import React, { useEffect, useState } from "react";
import { Icon } from "@blueprintjs/core";
import styled, { useTheme } from "styled-components";
import { LightenDarkenColor } from "../utils/colorHelper";
import useBreakpoints from "../utils/useBreakPoints";
import DrawerMenu from "./DrawerMenu";
import DropDown from "./DropDown";
import Toggle from "./shared/Toggler";
import CustomModal from "./shared/CustomModal";

const Wraper = styled.header`
  position: fixed;
  top: 0;
  display: block;
  width: 100%;
  transition: all 200ms ease-in-out;
  z-index: 11;
  .dark-layer {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    transition: all 400ms ease-in-out;
    background-image: linear-gradient(#000000c7, transparent);
    color: #fefefe;
  }
  .dark-layer nav ul {
    transition: all 50ms ease-in-out;
  }
  .bp3-icon {
    cursor: pointer;
  }
  .navbar-brand img {
    width: 200px;
  }
`;

const TopBar = styled.nav`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  transition: all 200ms ease-in-out;
  display: flex;
  &::-webkit-scrollbar {
    height: ${({ isSm }) => isSm && "10px"};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme, isSm }) => isSm && theme.secondary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ isSm }) => isSm && "#888"};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ isSm }) => isSm && "#555"};
  }
  & ul {
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    width: 100%;
    margin: 0;
  }
  & li {
    position: relative;
  }
  & a {
    display: block;
    width: max-content;
    padding: 0.5rem 1rem;
    transition: all 200ms linear;
  }
  & a:hover {
    color: ${({ theme }) => LightenDarkenColor(theme.accent, 50)};
  }
`;
const BottemNav = styled.nav`
  transition: all 200ms ease-in-out;
  * {
    transition: all 200ms ease-in-out;
  }
  & > ul {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    width: 100%;
    margin: 0;
    transition: all 200ms ease-in-out;
  }
  & a {
    display: block;
    padding: 0.5rem 0.75rem;
    transition: all 200ms linear;
  }
  & a:hover {
    color: ${({ float, theme }) =>
      float ? LightenDarkenColor(theme.accent, 20) : "inherit"};
  }
`;

const Header = (props) => {
  const { theme, toggleTheme, location } = props;
  const mTheme = useTheme();
  const { isSm } = useBreakpoints();

  let lastKnownScrollPosition = 0;
  const [float, setFloat] = useState(false);

  console.log(props);
  useEffect(() => {
    if (location.pathname !== "/") {
      document.getElementById("header").classList.add("float-header");
      setFloat(true);
    }
  }, [location.pathname]);

  if (location.pathname === "/") {
    document.addEventListener("scroll", () => {
      lastKnownScrollPosition = window.scrollY;
      if (lastKnownScrollPosition === 0) {
        document.getElementById("header").classList.remove("float-header");
        setFloat(false);
      }
      if (lastKnownScrollPosition > 15) {
        document.getElementById("header").classList.add("float-header");
        setFloat(true);
      }
    });
  }
  return (
    <Wraper id="header">
      <TopBar isSm={isSm} className="mw-100 overflow-auto">
        <ul>
          <li>
            <a href="">?????? ???????????? ??</a>
          </li>
          <li>
            <a href="">??????????? ???????? ?????? ????????</a>
          </li>
          <li>
            <a href="">?????????? ????????????</a>
          </li>
          <li>
            <a href="">???????????? ???????? ??????</a>
          </li>
          <li>
            <a href="">??????????</a>
          </li>
          <li className="d-none d-md-block ml-auto">
            <Toggle theme={theme} toggle={toggleTheme} />
          </li>
        </ul>
      </TopBar>
      <div className="dark-layer">
        <a className="navbar-brand m-0" href="/">
          <img
            src={float ? "/images/logo-red.svg" : "/images/logo-white.svg"}
            alt="?????????? ?????????????? ?????????? ???????????? ?????????? ?? ??????????????"
          />
        </a>
        <BottemNav className="d-none d-xl-block" float={float}>
          <ul>
            <DropDown
              title="?????????? ?? ????????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
            <DropDown
              title="??????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
            <DropDown
              title="?????????? ???????????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
            <DropDown
              title="?????????????? ???????? ?? ??????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
            <DropDown
              title="???????? ?? ??????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
            <DropDown
              title="????????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
            <DropDown
              title="??????????????"
              items={[{ title: "?????????? ?? ?????????? ????" }, { title: "????????????" }]}
            />
          </ul>
        </BottemNav>
        <div className="d-flex align-items-center ml-auto">
          <div>
            <Icon
              color={float ? mTheme.text : "#fefefe"}
              className="mr-3"
              iconSize={21}
              icon="search"
            />
            <DrawerMenu float={float} {...props} />
          </div>
          <div className="d-none d-xl-block">
            <CustomModal />
          </div>
        </div>
      </div>
    </Wraper>
  );
};

export default Header;
