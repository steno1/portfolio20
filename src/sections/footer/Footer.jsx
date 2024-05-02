import "./footer.css"; // CSS file for styling footer

import { footerData, links } from "../../data/footerData"; // Data containing footer information

// Footer component function
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    // Footer section
    <footer>
      <div className="container footer__container">
        {/* Navigation menu */}
        <ul className="nav__menu">
          {/* Mapping through links to render navigation items */}
          {links.map(flink => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a>
            </li>
          ))}
        </ul>
        
        {/* Social media icons */}
        <div className="footer__socials">
          {/* Mapping through footerData to render social media icons */}
          {footerData.map(social => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Copyright notice */}
      <div className="footer__copyright">
        <small>{`${currentYear} Onu Princeley © All Right Reserved`}</small>
      </div>
    </footer>
  );
};

export default Footer;
