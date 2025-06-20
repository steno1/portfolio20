import React, { useCallback, useEffect, useRef, useState } from "react";

import About from "./sections/About/About";
import Contact from "./sections/contacts/Contact";
import Faqs from "./sections/Faqs/Faqs";
import FloatingNav from "./sections/FloatingNav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Navbar from "./sections/Navbar/Navbar";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/themeContext";

const App = () => {
  const mainRef = useRef();
  const { themeState } = useThemeContext();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYposition, setSiteYposition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  const floatingNavToggleHandler = useCallback(() => {
    const currentPosition = mainRef.current.getBoundingClientRect().y;
    const scrolled = Math.abs(currentPosition - siteYposition);

    setSiteYposition(currentPosition);

    if (scrolled >= 20) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
  }, [siteYposition]);

  useEffect(() => {
    const interval = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(interval);
  }, [siteYposition, floatingNavToggleHandler]);

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Faqs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
