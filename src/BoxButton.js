import React, { useContext } from "react";
import { ThemeContext } from "./App";

const BoxButton = () => {
  const { darkMode, handleToggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={handleToggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default BoxButton;
