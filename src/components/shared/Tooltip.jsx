import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tooltiptext {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s linear, opacity 0.2s linear;
    display: inline-block;
    width: max-content;
    min-width: 80px;
    background-color: white;
    color: #000;
    text-align: center;
    border-radius: 6px;
    padding: 5px 2px;
    position: absolute;
    z-index: 1;
    top: 0;
    transform: translateY(calc(-100% - 5px));
  }
  .tooltiptext::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 5px solid transparent;
    border-top-color: white;
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
  }
  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = ({ children, className, Text }) => {
  return (
    <Wraper className={`custom-tooltip ${className}`}>
      {children}
      <span className="tooltiptext">{Text}</span>
    </Wraper>
  );
};

export default Tooltip;
