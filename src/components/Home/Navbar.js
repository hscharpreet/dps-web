import React, { useState } from "react";
import "./Navbar.css";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "../../firebase.config";
import Button from "./Button";
import { useEffect } from "react";
import logo from "../../assets/Group 1.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header className="navbar">
        <div className="homeNav">
          <div className={scrolled ? 'navLogo scrolled' : 'navLogo'} >
            <a href="/dps-web">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav className={scrolled ? 'navigation1' : 'navigation'}>
            <Button />
          </nav>
        </div>
      </header>

      {/* {scrolled ? 'navigation scrolled' : 'navigation'} */}
    </>
  );
};

export default Navbar;
