import "./header.css"
import "aos/dist/aos.css"

import Aos from "aos" // AOS library for scroll animations
import headerData from "../../data/headerData" // Data containing social media icons and links
import myPics from "../../asset/Too.png" // Image of the developer
import { useEffect } from "react" // Importing useEffect hook from React

// Header component function
const Header = () => {
  // useEffect hook to initialize AOS library when the component mounts
  useEffect(() => {
    Aos.init({ duration: 2000 }) // Initializing AOS with a duration of 2000ms for animations
  }, []) // Empty dependency array ensures that this effect runs only once when the component mounts

  // Returning JSX for the header section
  return (
    <header id="header">
      <div className="container header__container">
        {/* Profile section */}
        <div className="header__profile" data-aos='fade-in'>
          <img src={myPics} alt="myPics" />
        </div>

        {/* Developer name */}
        <h3 data-aos="fade-up">Onu Princeley Toochukwu</h3>

        {/* Description */}
        <p data-aos="fade-up">
          Take a step closer to realizing your dream website or web app. Share your project details now for a contemporary, mobile-responsive, and high-performance website!
        </p>

        {/* Call-to-action buttons */}
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Lets Talk</a>
          <a href="#portfolio" className="btn light">My Works</a>
        </div>

        {/* Social media icons */}
        <div className="header__socials">
          {/* Mapping through social media data to display icons */}
          {headerData.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

// Exporting the Header component
export default Header
