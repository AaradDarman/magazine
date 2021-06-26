import React, { useState } from "react";
import { Collapse, Button, Menu } from "@blueprintjs/core";
import styled from "styled-components";

const CollapseContainer = styled.div`
  background-color: ${({ theme, open }) => (open ? theme.primary.light : null)};
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  .bp3-collapse-body {
    padding-right: 5px;
  }
  .bp3-menu {
    padding-top: 0;
    padding-right: 10px;
  }
  .bp3-button span {
    line-height: 30px;
  }
  .bp3-menu,
  .bp3-button {
    background: inherit;
    color: inherit;
    text-align: right;
    justify-content: flex-start;
    box-shadow: none;
    padding: 0.5rem 1rem;
    font-size: inherit;
  }
  .bp3-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bp3-button:hover,
  .bp3-menu-item:hover {
    color: ${({ theme }) => theme.accent};
    background-color: inherit;
    box-shadow: none;
  }
  .bp3-button:hover::after {
    background-color: ${({ theme }) => theme.accent};
  }
  .bp3-button::after {
    content: "";
    background-color: ${({ theme }) => theme.text};
    mask: url("images/down-arrow.svg");
    display: block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
    transition: all 200ms ease-in-out;
  }
  .bp3-button::after {
    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
  }
`;

const CollapseComponent = ({ menuData, onLinkClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <CollapseContainer isOpen={open}>
      <Button onClick={() => setOpen(!open)}>{menuData.menuTitle}</Button>
      <Collapse keepChildrenMounted={true} isOpen={open}>
        <Menu>
          {menuData.items.map((item, index) => (
            <li key={index}>
              <a
                onClick={onLinkClick}
                className="bp3-menu-item rtl"
              >
                {item.title}
              </a>
            </li>
          ))}
        </Menu>
      </Collapse>
    </CollapseContainer>
  );
};

export default CollapseComponent;
