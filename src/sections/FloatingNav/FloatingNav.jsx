import "./floatingNav.css"; // CSS file for styling floating navigation

import Nav from "./Nav"; // Importing the Nav component
import Scrollspy from "react-scrollspy"; // Library for scrollspy functionality
import floatingNavData from "../../data/floatingNavData"; // Data containing navigation items

// FloatingNav component function
const FloatingNav = () => {
  return (
    <ul id='floating__nav'>
      {/* Scrollspy component to track scrolling and highlight active section */}
      <Scrollspy offset={-400} className="scrollspy" items={['header', 'about', 'services', 'portfolio', 'contact']} currentClassName="active">
        {/* Mapping through floatingNavData to render Nav components */}
        {floatingNavData.map(item => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
}

export default FloatingNav;
