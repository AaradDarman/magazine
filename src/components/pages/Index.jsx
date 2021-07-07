import React from "react";
import Article from "../Article";
import GamesTab from "../GamesTab";
import HomeCarousel from "../HomeCarousel";
import ScrollLayout from "../layouts/ScrollLayout";
import UpdatedCategory from "../UpdatedCategory";

const Index = () => {
  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <HomeCarousel />
      </div>
      <ScrollLayout>
        <Article />
      </ScrollLayout>
      <GamesTab />
      <UpdatedCategory />
    </>
  );
};

export default Index;
