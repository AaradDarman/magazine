import React from "react";
import styled from "styled-components";
import { hexToRGBA } from "../utils/colorHelper";
import Tooltip from "./shared/Tooltip";

const Wraper = styled.section`
  padding: 1rem;
  border: 1px solid ${hexToRGBA("#293133", 0.5)};
  border-radius: 0.3rem;
  position: relative;
  .headline span {
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .headline {
    display: flex;
    flex-direction: column;
  }
  .headline::before {
    content: "";
    position: absolute;
    top: 0;
    align-self: center;
    width: 80%;
    height: 4px;
    border-radius: 0 0 4px 4px;
    background-color: ${({ theme }) => theme.accent};
  }
  .widget-content {
    margin-top: 1rem;
  }
  .widget-content ul {
    list-style: none;
  }
  .widget-content ul li {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0.5rem 0.1rem;
  }
  .widget-content ul li span:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: #fefefe;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 2rem;
    width: 35px;
    height: 35px;
  }
  .widget-content ul li a {
    transition: all 300ms ease-in-out;
  }
  .widget-content ul li a:hover {
    color: ${({ theme }) => theme.accent};
  }
  .tooltiptext {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
  }
  .tooltiptext::after {
    border-top-color: ${({ theme }) => theme.secondary};
  }
`;

const Widget = () => {
  return (
    <Wraper className="widget">
      <div className="headline">
        <span>پربازدیدترین مطالب</span>
      </div>
      <div className="widget-content">
        <ul>
          <li>
            <a href="#">
              دنباله فیلم‌های ترسناکی که به اندازه قسمت نخست باارزش بودند
            </a>
            <Tooltip className="mr-2" Text={`5 نظر`}>
              <span>5</span>
            </Tooltip>
          </li>
          <li>
            <a href="#">
              دنباله فیلم‌های ترسناکی که به اندازه قسمت نخست باارزش بودند
            </a>
            <Tooltip className="mr-2" Text={`5 نظر`}>
              <span>5</span>
            </Tooltip>
          </li>
          <li>
            <a href="#">
              دنباله فیلم‌های ترسناکی که به اندازه قسمت نخست باارزش بودند
            </a>
            <Tooltip className="mr-2" Text={`5 نظر`}>
              <span>5</span>
            </Tooltip>
          </li>
          <li>
            <a href="#">
              دنباله فیلم‌های ترسناکی که به اندازه قسمت نخست باارزش بودند
            </a>
            <Tooltip className="mr-2" Text={`5 نظر`}>
              <span>5</span>
            </Tooltip>
          </li>
        </ul>
      </div>
    </Wraper>
  );
};

export default Widget;
