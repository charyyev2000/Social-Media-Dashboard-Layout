import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./globalStyle";
import Layout from "./Layout";

const App = () => {
  const [theme, setTheme] = useState("dark");

  // save to localstorage
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };
  // const toggleTheme = () => {
  //   theme === "dark" ? setTheme("light") : setTheme("dark");
  // };

  // save to localstorage
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <Layout theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
