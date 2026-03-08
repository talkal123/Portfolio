import React, { useState, createContext } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  console.log(mode);
  

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;