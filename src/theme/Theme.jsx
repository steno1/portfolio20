import "./theme.css";
import { backgroundColors, primaryColors } from "../data/themeData";
import BackgroundColor from "./BackgroundColor";
import Modal from "../components/modal/Modal";
import PrimaryColor from "./primaryColor";
import React from 'react';

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Customize Your Theme</h3>
      <small>Change the primary and background color to your preference</small>
      
      <div className="theme__primary-wrapper">
        <h5>Primary Color</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor, index) => (
            <PrimaryColor key={index} className={pColor.className} />
          ))}
        </div>
      </div>

      <div className="theme__background-wrapper">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor, index) => (
            <BackgroundColor key={index} className={bColor.className} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
