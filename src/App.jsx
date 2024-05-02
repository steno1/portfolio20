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
  // Reference to the main section
  const mainRef = useRef();

  // Accessing theme context
  const { themeState } = useThemeContext();

  // State for showing/hiding floating nav
  const [showFloatingNav, setShowFloatingNav] = useState(true);

  // State to track vertical position
  const [siteYposition, setSiteYposition] = useState(0);

  // Show the floating nav
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  // Hide the floating nav
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // Handler to toggle floating nav based on scroll
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

  // Effect to manage floating nav based on scroll position
  useEffect(() => {
    // Set interval to check scroll position every 2 seconds
    const interval = setInterval(floatingNavToggleHandler, 2000);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, [siteYposition, floatingNavToggleHandler]); // Include floatingNavToggleHandler in the dependencies

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      {/* Components */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Faqs />
      <Contact />
      <Footer />
      <Theme />

      {/* Show floating nav based on state */}
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
