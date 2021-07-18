import React, { useContext, useEffect, useState } from "react";
import { Classes, Drawer, Icon } from "@blueprintjs/core";
import useBreakpoints from "../utils/useBreakPoints";
import styled, { useTheme } from "styled-components";
import CollapseComponent from "./CollapseComponent";
import Toggle from "./shared/Toggler";
import { appContext } from "../context/app-context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const DrawerHeader = styled.div`
  position: relative;
  align-items: center;
  border-radius: 0;
  box-shadow: 0 1px 0 rgb(16 22 26 / 15%);
  display: flex;
  flex: 0 0 auto;
  min-height: 40px;
  padding: 0.5rem 1rem;
  padding-left: 20px;
  .header-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  .theme-toggler {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

const newsAndArticle = {
  menuTitle: "اخبار و مقالات",
  totalLink: "/newsAndArticle",
  items: [
    { title: "اخبار و گزارش‌ها" },
    { title: "مقالات" },
    { title: "نگاه نخست" },
    { title: "برترین ها" },
    { title: "مصاحبه" },
    { title: "بازی سازی" },
    { title: "پیشنهاد هفته" },
  ],
};
const video = {
  menuTitle: "ویدیو",
  totalLink: "/video",
  items: [
    { title: "ویجی لاگ" },
    { title: "بهترین بازی های موبایل" },
    { title: "تاپ 10" },
    { title: "تریلر ها" },
    { title: "برنامه ویدیویی" },
  ],
};
const gamesReview = {
  menuTitle: "بررسی بازی ها",
  totalLink: "/gamesReview",
  items: [
    { title: "بازی های پی سی" },
    { title: "بازی های ایکس باکس وان" },
    { title: "بازی های پلی استیشن" },
    { title: "بازی های نینتندو سوییچ" },
    { title: "بازی های موبایل" },
  ],
};
const buyGuide = {
  menuTitle: "راهنمای خرید و آموزش",
  totalLink: "/buyGuide",
  items: [
    { title: "راهنمای بازی" },
    { title: "راهنمای خرید" },
    { title: "راهنمای والدین" },
  ],
};
const movieAndTvShow = {
  menuTitle: "فیلم و سریال",
  totalLink: "/movieAndTvShow",
  items: [{ title: "سریال" }, { title: "انیمه" }, { title: "انیمیشن" }],
};
const entertainment = {
  menuTitle: "سرگرمی",
  totalLink: "/entertainment",
  items: [
    { title: "بردگیم و دورهمی" },
    { title: "کمیک بوک" },
    { title: "گشت و گذار" },
  ],
};
const vigiato = {
  menuTitle: "ویجیاتو",
  totalLink: "/vigiato",
  items: [
    { title: "درباره ما" },
    { title: "تماس با ما" },
    { title: "فرصت های شغلی" },
    { title: "تبلیغات" },
  ],
};

const DrawerMenu = ({ float, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { active } = useBreakpoints();
  const { setModalState } = useContext(appContext);
  const mTheme = useTheme();
  useEffect(() => {
    closeDrawer();
  }, [active]);

  const closeDrawer = () => {
    setIsOpen(false);
  };
  const openDrawer = () => {
    setIsOpen(true);
  };
  return (
    <div className="d-inline-block d-xl-none">
      <Icon
        color={float ? mTheme.text : "#fefefe"}
        icon="menu"
        iconSize={22}
        onClick={openDrawer}
      />
      <Drawer onClose={closeDrawer} isOpen={isOpen} position="left">
        <DrawerHeader>
          <Toggle
            className="theme-toggler"
            theme={theme}
            toggle={toggleTheme}
          />
          <Icon
            className="ml-auto header-icon"
            style={{ cursor: "pointer" }}
            color={mTheme.text}
            iconSize={22}
            icon="cross"
            onClick={closeDrawer}
          />
        </DrawerHeader>
        <div className={Classes.DRAWER_BODY}>
          <Container>
            <CollapseComponent menuData={newsAndArticle} />
            <CollapseComponent menuData={video} />
            <CollapseComponent menuData={gamesReview} />
            <CollapseComponent menuData={buyGuide} />
            <CollapseComponent menuData={movieAndTvShow} />
            <CollapseComponent menuData={entertainment} />
            <CollapseComponent menuData={vigiato} />
          </Container>
        </div>
        <div className={Classes.DRAWER_FOOTER}>
          <ButtonContainer>
            <button
              onClick={() => {
                closeDrawer();
                setModalState(true);
              }}
              className="btn btn-primary"
            >
              ورود
            </button>
            <button
              onClick={() => {
                closeDrawer();
                setModalState(true);
              }}
              className="btn btn-secondary"
            >
              ثبت نام
            </button>
          </ButtonContainer>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
