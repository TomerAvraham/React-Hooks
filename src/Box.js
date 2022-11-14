import React from "react";
import BoxButton from "./BoxButton";
import { useThemeContext } from "./context/themeContext";

const Box = () => {
  const darkMode = useThemeContext();
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: darkMode ? "#000000" : "#f2f2f2f2",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      I'm Box
      <BoxButton />
    </div>
  );
};

export default Box;
