import React, { useState, useEffect, createContext } from "react";

// @ts-ignore
export const OsThemeContext = createContext();

export const OsThemeProvider = (props) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      setTheme("apple");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <OsThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </OsThemeContext.Provider>
  );
};
