import React, { useState, createContext } from "react";
import Box from "./Box";
import MultiInputs from "./MultiInputs";

export const ThemeContext = createContext(null);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  function handleToggleTheme() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    // setDarkMode(!darkMode); // bad practice - DONT DO IT!!!!
  }

  return (
    <ThemeContext.Provider value={{ darkMode, handleToggleTheme }}>
      <div>
        {/* <button onClick={handleToggleTheme}>Toggle theme</button> */}
        {/* <Box /> */}
        <MultiInputs />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
