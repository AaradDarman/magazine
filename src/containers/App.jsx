import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../utils/themes";
import { GlobalStyles } from "../utils/globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import MagazineSite from "./MagazineSite";

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
      <GlobalStyles />
      <MagazineSite theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
