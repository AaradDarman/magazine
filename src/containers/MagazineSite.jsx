import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import MainLayout from "../components/layouts/MainLayout";

const MagazineSite = (props) => {
  return (
    <MainLayout {...props}>
      <div style={{ marginTop: "40px" }}>
        <HomeCarousel />
      </div>
    </MainLayout>
  );
};

export default MagazineSite;
