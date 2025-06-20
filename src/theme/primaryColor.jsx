import React from 'react';
import { useThemeContext } from '../context/themeContext';


const PrimaryColor = ({ className }) => {
  const { themeHandler } = useThemeContext();

  return (
    // 
    <button className={className} onClick={() => themeHandler(className)}>
    
    </button>
  );
};

export default PrimaryColor;
