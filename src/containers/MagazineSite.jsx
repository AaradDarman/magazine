import React from "react";
import { Route, Switch } from "react-router-dom";
import GamesTab from "../components/GamesTab";
import HomeCarousel from "../components/HomeCarousel";
import MainLayout from "../components/layouts/MainLayout";
import ScrollLayout from "../components/layouts/ScrollLayout";
import UpdatedCategory from "../components/UpdatedCategory";

const MagazineSite = (props) => {
  return (
    <Switch>
      <MainLayout {...props}>
      </MainLayout>
    </Switch>
  );
};

export default MagazineSite;
