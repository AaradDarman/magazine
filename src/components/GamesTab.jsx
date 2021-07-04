import React, { useState } from "react";
import {
  Alignment,
  Button,
  Classes,
  H3,
  H5,
  InputGroup,
  Navbar,
  MenuItem,
  Tab,
  Menu,
  Tabs,
} from "@blueprintjs/core";
import styled from "styled-components";
import { hexToRGBA, LightenDarkenColor } from "../utils/colorHelper";
import CollapseComponent from "./CollapseComponent";
import { Popover2 } from "@blueprintjs/popover2";

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  .gametabs-title {
    position: absolute;
    font-size: 1.3rem;
    right: 1rem;
    top: 31px;
  }
  .cdropdown-menu {
    position: absolute;
    top: 26px;
    left: 1rem;
    z-index: 99999;
  }
  .bp3-button {
    background: ${({ theme }) => theme.accent};
    color: #fefefe;
    text-align: right;
    justify-content: flex-start;
    box-shadow: none;
    padding: 0.5rem 1rem;
    font-size: inherit;
  }
  .bp3-button.bp3-active {
    background: ${({ theme }) => theme.accent};
    color: #fefefe;
  }
  .bp3-button:hover {
    background: ${({ theme }) => LightenDarkenColor(theme.accent, -20)};
    box-shadow: none;
  }
  .bp3-button::before {
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
  .more {
    color: ${({ theme }) => theme.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
    letter-spacing: 1px;
    margin: 1rem 0 0;
  }
  .more i {
    color: ${({ theme }) => theme.text};
    margin-left: 1rem;
  }
`;

const CustomTabs = styled(Tabs)`
  direction: ltr;
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  @media (max-width: 993px) {
    .bp3-tab-list {
      display: none;
    }
  }
  .bp3-tab-list {
    padding: 1rem 0;
  }
  .bp3-tab {
    z-index: 5;
    padding: 0 0.2rem;
    color: ${({ theme }) => theme.text};
    transition: all 300ms ease-in-out;
  }
  .bp3-tab[aria-selected="true"] {
    color: #fefefe;
  }
  .bp3-tab:not([aria-selected="true"]):hover {
    color: ${({ theme }) => theme.accent};
  }
  .bp3-tab[aria-selected="true"]::after {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    position: absolute;
    border-radius: 0.2rem;
    background-color: ${({ theme }) => theme.accent};
  }
  .bp3-tab[aria-selected="true"] {
    border-radius: 0;
    box-shadow: none;
  }
  .bp3-tab-list {
    margin-bottom: 2rem;
  }
  .bp3-tab-list::after {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    position: absolute;
    bottom: -10px;
    background: linear-gradient(
      to right,
      rgba(163, 163, 163, 0) 0%,
      #a3a3a3 15%,
      #a3a3a3 85%,
      rgba(163, 163, 163, 0) 100%
    );
  }
`;

const GameTab = () => {
  const Wraper = styled.div`
    color: #fefefe;
    .game-post {
      height: 380px;
      margin-bottom: 30px;
    }
    .game-post a::before {
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
    .game-post a {
      display: block;
      position: relative;
      background: url("images/banner.jpg") no-repeat center center;
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
      font-size: 1.3rem;
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
    a:hover {
      color: inherit;
      transform: scale(1.01);
    }
    a:hover .info h4 {
      background-color: ${({ theme }) => hexToRGBA(theme.accent, 1)};
    }
  `;
  return (
    <Wraper className="row">
      <div className="game-post col-12 col-lg-6">
        <a href="#">
          <div class="info">
            <h4 class="title mb-0">معرفی آیرون میدن – رقیب حسود بلک ویدو</h4>
            <p class="sub-title d-none d-lg-block">
              همکار بلک ویدو که به خون ناتاشا رومانوف تشنه است
            </p>
          </div>
        </a>
      </div>
      <div className="game-post col-12 col-lg-6">
        <a href="#">
          <div className="info w-100">
            <h4 className="title mb-0">
              معرفی آیرون میدن – رقیب حسود بلک ویدو
            </h4>
            <p className="sub-title d-none d-lg-block">
              همکار بلک ویدو که به خون ناتاشا رومانوف تشنه است
            </p>
          </div>
        </a>
      </div>
      <div className="game-post col-12 col-lg-6">
        <a href="#">
          <div className="info w-100">
            <h4 className="title mb-0">
              معرفی آیرون میدن – رقیب حسود بلک ویدو
            </h4>
            <p className="sub-title d-none d-lg-block">
              همکار بلک ویدو که به خون ناتاشا رومانوف تشنه است
            </p>
          </div>
        </a>
      </div>
      <div className="game-post col-12 col-lg-6">
        <a href="#">
          <div className="info w-100">
            <h4 className="title mb-0">
              معرفی آیرون میدن – رقیب حسود بلک ویدو
            </h4>
            <p className="sub-title d-none d-lg-block">
              همکار بلک ویدو که به خون ناتاشا رومانوف تشنه است
            </p>
          </div>
        </a>
      </div>
    </Wraper>
  );
};

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
  const [activeTab, setActiveTab] = useState("همه");
  return (
    <Wraper className="gametabs">
      <span className="gametabs-title">بررسی بازی ها</span>
      <div className="d-block d-lg-none cdropdown-menu">
        <DropdownMenu setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      <CustomTabs
        className="mt-5 mt-lg-0"
        animate={false}
        defaultSelectedTabId={activeTab}
        id="TabsExample"
        selectedTabId={activeTab}
        onChange={(index) => setActiveTab(index)}
      >
        <Tab
          id="بازی های ایکس باکس وان"
          title="بازی های ایکس باکس وان"
          panel={<GameTab />}
        />
        <Tab
          id="بازی های نینتندو سوییچ"
          title="بازی های نینتندو سوییچ"
          panel={<GameTab />}
        />
        <Tab
          id="بازی های پلی استیشن"
          title="بازی های پلی استیشن"
          panel={<GameTab />}
        />
        <Tab id="بازی های پی سی" title="بازی های پی سی" panel={<GameTab />} />
        <Tab id="بازی های موبایل" title="بازی های موبایل" panel={<GameTab />} />
        <Tab id="همه" title="همه" panel={<p>asd</p>} />
      </CustomTabs>
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
