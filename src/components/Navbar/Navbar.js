import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Ellipse 2.png";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div  className={colorChange ? "navChange" : "navBar"}>
      <ul className="navigation">
        <div className="leftNav">
          <Link to="/" className="link">
            <div class=" divineLogo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="rightNav">
          <Link to="/about" className="link">
            <li class="item">About</li>
          </Link>
          <Link to="/admission" className="link">
            <li class="item">Admission</li>
          </Link>
          <Link to="/academics" className="link">
            <li class="item">Academics</li>
          </Link>
          <Link to="/activities" className="link">
            <li class="item">Activities</li>
          </Link>
          <Link to="/contact" className="link">
            <li class="item">Contact</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
