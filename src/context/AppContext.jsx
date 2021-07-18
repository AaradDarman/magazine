import React, { useState } from "react";
import { appContext } from "./app-context";

const AppContext = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <appContext.Provider value={{ modalState, setModalState }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
