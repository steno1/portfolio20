import "./Nav.css";
import { IoMdColorPalette } from "react-icons/io";
import myLogo from "../../asset/myLogo2.jpg";
import navData from "../../data/navData";
import { useModalContext } from "../../context/modalContext";

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={myLogo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {navData.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoMdColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
