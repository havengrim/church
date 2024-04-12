// DarkModeToggle.js
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-4 right-4 ${isDarkMode ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-500'} px-3 py-3 rounded-full`}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default DarkModeToggle;
