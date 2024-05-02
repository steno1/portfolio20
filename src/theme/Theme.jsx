import "./theme.css"; // CSS file for styling the theme

import { backgroundColors, primaryColors } from "../data/themeData"; // Data containing theme colors

import BackgroundColor from "./BackgroundColor"; // Importing the BackgroundColor component
import Modal from "../components/modal/Modal"; // Importing the Modal component
import PrimaryColor from "./primaryColor"; // Importing the PrimaryColor component
import React from 'react'; // Importing React

// Theme component function
const Theme = () => {
  return (
    // Modal for customizing theme
    <Modal className="theme__modal">
      <h3>Customize Your Theme</h3>
      <small>Change the primary and background color to your preference</small>
      
      {/* Section for selecting primary color */}
      <div className="theme__primary-wrapper">
        <h5>Primary Color</h5>
        <div className="theme__primary-colors">
          {/* Mapping through primaryColors to render PrimaryColor components */}
          {primaryColors.map((pColor, index) => (
            <PrimaryColor key={index} className={pColor.className} />
          ))}
        </div>
      </div>

      {/* Section for selecting background color */}
      <div className="theme__background-wrapper">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
          {/* Mapping through backgroundColors to render BackgroundColor components */}
          {backgroundColors.map((bColor, index) => (
            <BackgroundColor key={index} className={bColor.className} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
