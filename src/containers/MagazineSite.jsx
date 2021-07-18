import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Index from "../components/pages/Index";
import Post from "../components/pages/Post";
import AppContext from "../context/AppContext.jsx";

const MagazineSite = (props) => {
  return (
    <AppContext>
      <Switch>
        <MainLayout {...props}>
          <Route path="/" exact component={Index} />
          <Route path="/p/:id" exact component={Post} />
        </MainLayout>
      </Switch>
    </AppContext>
  );
};

export default MagazineSite;
