import React, { useContext } from "react";
import { ThemeContext } from "./App";
import BoxButton from "./BoxButton";

const Box = () => {
  const { darkMode } = useContext(ThemeContext);

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
