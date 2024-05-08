import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState('dark');


  const toggleTheme = () => {
    setIsDarkMode(isDarkMode === 'dark'? 'light': 'dark');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider,useTheme};
