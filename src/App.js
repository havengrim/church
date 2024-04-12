// App.js
import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import CarouselWithNavbar from './components/CarouselWithNavbar';
import Details from './components/Details';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className=" dark:bg-slate-800 dark:text-white">
         <CarouselWithNavbar />
          <Details />
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} className="z-10"/>
    </div>
  );
}

export default App;
