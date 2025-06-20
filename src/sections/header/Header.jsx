import "./header.css"
import "aos/dist/aos.css"

import Aos from "aos"
import headerData from "../../data/headerData"
import myPics from "../../asset/Too.png"
import { useEffect } from "react"

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos='fade-in'>
          <img src={myPics} alt="myPics" />
        </div>

        <h3 data-aos="fade-up">Onu Princeley Toochukwu</h3>

        <p data-aos="fade-up">
          Take a step closer to realizing your dream website or web app. Share your project details now for a contemporary, mobile-responsive, and high-performance website!
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Lets Talk</a>
          <a href="#portfolio" className="btn light">My Works</a>
        </div>

        <div className="header__socials">
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

export default Header
