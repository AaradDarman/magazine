import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header {...props} />
      <>{children}</>
      <Footer />
    </>
  );
};

export default MainLayout;
