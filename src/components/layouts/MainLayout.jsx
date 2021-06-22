import React from "react";
import styled from "styled-components";
import Toggle from "../shared/Toggler";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

const MainLayout = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <Header>
          </ul>
        </TopBar>
      </Header>
      <>{children}</>
    </>
  );
};

export default MainLayout;
