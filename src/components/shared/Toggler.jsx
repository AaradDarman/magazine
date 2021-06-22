import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  /* padding: 0.2rem; */
  position: relative;
  width: 4rem;
  height: 2rem;
`;

const Toggle = ({ theme, toggle, className }) => {
  const lightTheme = theme === "light";
  return (
    <ToggleContainer
      className={className}
      lightTheme={lightTheme}
      onClick={toggle}
    ></ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggle: func.isRequired,
};

export default Toggle;
