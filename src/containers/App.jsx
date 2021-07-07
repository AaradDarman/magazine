import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../utils/themes";
import { GlobalStyles } from "../utils/globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import MagazineSite from "./MagazineSite";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  let themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
      console.log('cha');
    themeMode = theme === "light" ? lightTheme : darkTheme;
  }, [theme]);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <GlobalStyles />
        <MagazineSite theme={theme} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
