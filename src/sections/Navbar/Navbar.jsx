import "./Nav.css"; // CSS file for styling the navigation

import { IoMdColorPalette } from "react-icons/io"; // Icon component for color palette
import myLogo from "../../asset/myLogo2.jpg"; // Logo image
import navData from "../../data/navData"; // Data containing navigation items
import { useModalContext } from "../../context/modalContext"; // Modal context hook

// Navbar component function
const Navbar = () => {
  const { showModalHandler } = useModalContext(); // Accessing showModalHandler from modal context

  return (
    // Navigation bar
    <nav>
      <div className="container nav__container">
        {/* Logo */}
        <a href="index.html" className="nav__logo">
          <img src={myLogo} alt="logo" />
        </a>
        
        {/* Navigation menu */}
        <ul className="nav__menu">
          {/* Mapping through navData to render navigation items */}
          {navData.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        
        {/* Button for theme customization modal */}
        <button id="theme__icon" onClick={showModalHandler}>
          <IoMdColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
