import { Button, Menu } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { hexToRGBA, LightenDarkenColor } from "../utils/colorHelper";
import useBreakpoints from "../utils/useBreakPoints";

const CMenu = ({ setActiveTab, activeTab, setIsOpen }) => {
  return (
    <Menu>
      <li>
        <a
          className={`bp3-menu-item ${activeTab === "همه" ? "bp3-active" : ""}`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("همه");
            setIsOpen(false);
          }}
        >
          همه
        </a>
      </li>
      <li>
        <a
          className={`bp3-menu-item ${
            activeTab === "بازی های موبایل" ? "bp3-active" : ""
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("بازی های موبایل");
            setIsOpen(false);
          }}
        >
          بازی های موبایل
        </a>
      </li>
      <li>
        <a
          className={`bp3-menu-item ${
            activeTab === "بازی های پی سی" ? "bp3-active" : ""
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("بازی های پی سی");
            setIsOpen(false);
          }}
        >
          بازی های پی سی
        </a>
      </li>
      <li>
        <a
          className={`bp3-menu-item ${
            activeTab === "بازی های پلی استیشن" ? "bp3-active" : ""
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("بازی های پلی استیشن");
            setIsOpen(false);
          }}
        >
          بازی های پلی استیشن
        </a>
      </li>
      <li>
        <a
          className={`bp3-menu-item ${
            activeTab === "بازی های نینتندو سوییچ" ? "bp3-active" : ""
          }`}
          href="#"
          onClick={(e) => {
            console.log(e);
            e.preventDefault();
            setActiveTab("بازی های نینتندو سوییچ");
            setIsOpen(false);
          }}
        >
          بازی های نینتندو سوییچ
        </a>
      </li>
      <li>
        <a
          className={`bp3-menu-item ${
            activeTab === "بازی های ایکس باکس وان" ? "bp3-active" : ""
          }`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("بازی های ایکس باکس وان");
            setIsOpen(false);
          }}
        >
          بازی های ایکس باکس وان
        </a>
      </li>
    </Menu>
  );
};

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover2
      content={<CMenu {...props} setIsOpen={setIsOpen} />}
      placement="bottom-start"
      isOpen={isOpen}
    >
      <Button text="پلتفرم ها" onClick={() => setIsOpen(!isOpen)} />
    </Popover2>
  );
};

const GamesTab = () => {
  const { isSm } = useBreakpoints();
  const Wraper = styled.div`
    color: #fefefe;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-radius: 0.3rem;
    .more {
      color: ${({ theme }) => theme.accent};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${isSm ? "1.3rem" : "0.95rem"};
      letter-spacing: 1px;
      margin: 1rem 0 0;
    }
    .more i {
      color: ${({ theme }) => theme.text};
      margin-left: 1rem;
    }
  `;

  const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: ${isSm ? "" : "center"};
    padding: 1rem;
    margin-bottom: 2rem;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      display: block;
      position: absolute;
      bottom: 0;
      background: linear-gradient(
        to right,
        rgba(163, 163, 163, 0) 0%,
        #a3a3a3 15%,
        #a3a3a3 85%,
        rgba(163, 163, 163, 0) 100%
      );
    }
    .tabs-title {
      font-size: ${isSm ? "1.3rem" : "0.95rem"};
      margin-left: auto;
      color: ${({ theme }) => theme.text};
    }
    .tabs {
      display: flex;
      align-items: center;
      list-style: none;
      margin-bottom: 1.5rem;
    }
    .tabs .tab {
      display: flex;
      align-items: center;
      background: transparent;
      box-shadow: none;
      color: ${({ theme }) => theme.text};
      transition: all 0.3s ease-in-out;
    }
    .tabs .tab.active {
      background-color: ${({ theme }) => theme.accent};
      color: #fefefe;
    }
    .tabs .tab:not(.active):hover {
      color: ${({ theme }) => theme.accent};
    }
    .cdropdown-menu .bp3-button {
      background: ${({ theme }) => theme.accent};
      color: #fefefe;
      text-align: right;
      justify-content: flex-start;
      box-shadow: none;
      padding: 0.5rem 1rem;
      font-size: ${({ isSm }) => (isSm ? "1.3rem" : "0.95rem")};
    }
    .cdropdown-menu .bp3-button.bp3-active {
      background: ${({ theme }) => theme.accent};
      color: #fefefe;
    }
    .cdropdown-menu .bp3-button:hover {
      background-color: ${({ theme }) => LightenDarkenColor(theme.accent, -20)};
      box-shadow: none;
    }
    .cdropdown-menu .bp3-button::before {
      content: "";
      background-color: #fefefe;
      mask: url("images/down-arrow.svg");
      display: block;
      width: 11px;
      height: 11px;
      margin-right: 0;
      transform: rotate(90deg);
      transition: all 200ms ease-in-out;
    }
  `;
  const TabPanel = styled.div`
    display: flex;
    align-items: center;
  `;

  const GamePost = styled.div`
    height: 380px;
    margin-bottom: 30px;
    & a::before {
      z-index: 6;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 200px;
      width: 100%;
      transition: 0.3s;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        #000000 70%
      );
      opacity: 0.85;
      pointer-events: none;
    }
    & a {
      display: block;
      position: relative;
      background: url(/images/${({ imgUrl }) => imgUrl}) no-repeat center center;
      background-size: cover;
      width: 100%;
      height: 100%;
      transition: all 300ms ease-in-out;
      border-radius: 0.3rem;
      border-bottom: 5px solid ${({ theme }) => theme.accent};
    }
    .info {
      z-index: 7;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .info h4 {
      font-size: ${isSm ? "1.3rem" : "0.95rem"};
      line-height: 35px;
      background-color: ${({ theme }) => hexToRGBA(theme.accent, 0.8)};
      transition: all 300ms ease-in-out;
    }
    .info p {
      font-size: 0.9rem;
      text-shadow: 1px 1px #e31e2e;
    }
    .info h4,
    p {
      padding: 8px 16px 8px 8px;
    }
    & a:hover {
      color: inherit;
      transform: scale(1.01);
    }
    & a:hover .info h4 {
      background-color: ${({ theme }) => hexToRGBA(theme.accent, 1)};
    }
  `;

  const [activeTab, setActiveTab] = useState("همه");
  const [items, setItems] = useState([]);
  const { gamesReviewPosts } = useSelector((state) => state);

  useEffect(() => {
    if (activeTab != "همه") {
      const filteredItemes = gamesReviewPosts.filter((item) =>
        item.type.find((str) => str === activeTab)
      );
      setItems(_(filteredItemes).slice(0).take(4).value());
    } else {
      setItems(_(gamesReviewPosts).slice(0).take(4).value());
    }
  }, [activeTab]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName.target.innerText);
  };
  return (
    <Wraper>
      <TabsContainer className="tabs-container">
        <div className="tabs-title">بررسی بازی ها</div>
        <div className="d-block d-lg-none cdropdown-menu">
          <DropdownMenu setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <ul className="tabs d-none d-lg-flex">
          <li
            className={`tab bp3-button ${activeTab === "همه" ? "active" : ""}`}
            onClick={handleTabChange}
          >
            همه
          </li>
          <li
            className={`tab bp3-button ${
              activeTab === "بازی های ایکس باکس وان" ? "active" : ""
            }`}
            onClick={handleTabChange}
          >
            بازی های ایکس باکس وان
          </li>
          <li
            className={`tab bp3-button ${
              activeTab === "بازی های نینتندو سوییچ" ? "active" : ""
            }`}
            onClick={handleTabChange}
          >
            بازی های نینتندو سوییچ
          </li>
          <li
            className={`tab bp3-button ${
              activeTab === "بازی های پلی استیشن" ? "active" : ""
            }`}
            onClick={handleTabChange}
          >
            بازی های پلی استیشن
          </li>
          <li
            className={`tab bp3-button ${
              activeTab === "بازی های پی سی" ? "active" : ""
            }`}
            onClick={handleTabChange}
          >
            بازی های پی سی
          </li>
          <li
            className={`tab bp3-button ${
              activeTab === "بازی های موبایل" ? "active" : ""
            }`}
            onClick={handleTabChange}
          >
            بازی های موبایل
          </li>
        </ul>
      </TabsContainer>
      <TabPanel className="tab-panel row m-0">
        {items.map((item) => (
          <GamePost
            imgUrl={item.postThumbnail}
            className="game-post col-12 col-lg-6"
          >
            <a href="#">
              <div className="info">
                <h4 className="title mb-0">{item.title}</h4>
                <p className="sub-title d-none d-lg-block">{item.subtitle}</p>
              </div>
            </a>
          </GamePost>
        ))}
      </TabPanel>
      <div>
        <a href="#" className="more">
          <i className="fas fa-chevron-left"></i>
          {`همه ی ${activeTab != "همه" ? activeTab : "بررسی بازی ها"}`}
        </a>
      </div>
    </Wraper>
  );
};

export default GamesTab;
