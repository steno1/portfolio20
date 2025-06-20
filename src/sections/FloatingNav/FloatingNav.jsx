import "./floatingNav.css";
import Nav from "./Nav";
import Scrollspy from "react-scrollspy";
import floatingNavData from "../../data/floatingNavData";

const FloatingNav = () => {
  return (
    <ul id='floating__nav'>
      <Scrollspy offset={-400} className="scrollspy" items={['header', 'about', 'services', 'portfolio', 'contact']} currentClassName="active">
        {floatingNavData.map(item => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
}

export default FloatingNav;
