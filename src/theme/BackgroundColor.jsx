import React from 'react';
import { useThemeContext } from '../context/themeContext'; 


const BackgroundColor = ({ className }) => {
  const { themeHandler } = useThemeContext(); 

  return (
    
    <button className={className} onClick={() => themeHandler(className)}>
    </button>
  );
};

export default BackgroundColor;
