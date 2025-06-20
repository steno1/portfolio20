import "./footer.css";
import { footerData, links } from "../../data/footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map(flink => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {footerData.map(social => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>{`${currentYear} Onu Princeley © All Right Reserved`}</small>
      </div>
    </footer>
  );
};

export default Footer;
