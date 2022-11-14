import React from "react";
import Box from "./Box";
import { useThemeUpdateContext } from "./context/themeContext";

const App = () => {
  const handleToggleTheme = useThemeUpdateContext();

  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle theme</button>
      <Box />
    </div>
  );
};

export default App;
