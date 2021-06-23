import React, { useState } from "react";
import styled from "styled-components";
import { LightenDarkenColor } from "../utils/colorHelper";

const NavLinks = styled.ul`
  display: block;
  position: absolute;
  max-height: 0;
  width: max-content;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  transition: all 0.15s ease-out;
  overflow: hidden;
  border-radius: 0.2rem;
  & > li > a:hover {
    color: ${({ theme }) => LightenDarkenColor(theme.accent, 20)};
  }
`;

const Wraper = styled.li`
  position: relative;
  &:hover {
    /* color: ${({ theme }) => LightenDarkenColor(theme.accent, 20)}; */
    ${NavLinks} {
      max-height: 200px;
      border-top: 3px solid ${({ theme }) => theme.accent};
      transition: all 0.15s ease-out;
    }
  }
  a.dropdowwn-toggle {
    display: flex;
    align-items: center;
  }
  a.dropdowwn-toggle::after {
    content: "";
    background-color: #fefefe;
    mask: url("images/down-arrow.svg");
    display: block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
    transition: all 200ms ease-in-out;
  }
  a.dropdowwn-toggle::after {
    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
  }
`;

const DropDown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Wraper
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a className="dropdowwn-toggle" href="#">
        {title}
      </a>
      <NavLinks onMouseLeave={() => setIsOpen(false)}>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </NavLinks>
    </Wraper>
  );
};

export default DropDown;
