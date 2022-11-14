import React from "react";
import { useThemeContext, useThemeUpdateContext } from "./context/themeContext";

const BoxButton = () => {
  const darkMode = useThemeContext();
  const handleToggleTheme = useThemeUpdateContext();

  return (
    <button onClick={handleToggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default BoxButton;
