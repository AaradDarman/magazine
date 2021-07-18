import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  padding: 0 0.2rem;
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
  .day {
    transition: all 0.3s ease-in-out;
    transform: translateX(-2rem);
  }
  .night {
    transition: all 0.3s ease-in-out;
    transform: translateX(0);
  }
`;

const Toggle = ({ theme, toggle, className }) => {
  const lightTheme = theme === "light";
  return (
    <ToggleContainer
      className={className}
      lightTheme={lightTheme}
      onClick={toggle}
    >
      <Icon
        className={lightTheme ? "day" : "night"}
        icon={lightTheme ? "sun" : "moon"}
        size={20}
      />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggle: func.isRequired,
};

export default Toggle;
