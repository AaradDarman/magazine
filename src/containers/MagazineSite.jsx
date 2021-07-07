import React from "react";
import { Route, Switch } from "react-router-dom";
import GamesTab from "../components/GamesTab";
import HomeCarousel from "../components/HomeCarousel";
import MainLayout from "../components/layouts/MainLayout";
import ScrollLayout from "../components/layouts/ScrollLayout";
import Index from "../components/pages/Index";
import UpdatedCategory from "../components/UpdatedCategory";

const MagazineSite = (props) => {
  return (
    <Switch>
      <MainLayout {...props}>
        <Route path="/" exact component={Index} />
      </MainLayout>
    </Switch>
  );
};

export default MagazineSite;
