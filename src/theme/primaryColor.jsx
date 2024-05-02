import React from 'react';
import { useThemeContext } from '../context/themeContext'; // Importing theme context

// PrimaryColor component function
const PrimaryColor = ({ className }) => {
  const { themeHandler } = useThemeContext(); // Accessing themeHandler from the theme context

  return (
    // Button representing a primary color option
    <button className={className} onClick={() => themeHandler(className)}>
      {/* Empty button, typically representing a color swatch or selection */}
    </button>
  );
};

export default PrimaryColor;
