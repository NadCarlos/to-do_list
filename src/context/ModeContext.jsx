import React, { useState } from 'react';

export default ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};


