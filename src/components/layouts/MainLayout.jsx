import React from "react";
import Header from "../Header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header {...props} />
      <>{children}</>
    </>
  );
};

export default MainLayout;