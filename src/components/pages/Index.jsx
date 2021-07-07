import React from "react";
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
      </ScrollLayout>
      <GamesTab />
      <UpdatedCategory />
    </>
  );
};

export default Index;
