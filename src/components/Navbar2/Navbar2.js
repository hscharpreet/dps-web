import React, { useState } from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Ellipse 2.png";

const Navbar2 = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#e3d53e" : "white",
    };
  };
  return (
    <>
      <nav className={colorChange ? "navChange" : "navBar"}>
        <div className="leftNav">
          <NavLink to="/" className="link">
            <div class=" divineLogo">
              <img src={logo} alt="Logo" />
            </div>
          </NavLink>
        </div>

        <div className="rightNav">
          <NavLink style={navLinkStyles} to="/about" className="item">
           <h5>About</h5> 
          </NavLink>
          <NavLink style={navLinkStyles} to="/admission" className="item">
          <h5>Admission</h5> 
          </NavLink>
          <NavLink style={navLinkStyles} to="/academics" className="item">
          <h5>Academics</h5> 
          </NavLink>
          <NavLink style={navLinkStyles} to="/activities" className="item">
          <h5>Activities</h5> 
          </NavLink>
          <NavLink style={navLinkStyles} to="/information" className="item">
          <h5>School Info</h5> 
          </NavLink>
          <NavLink style={navLinkStyles} to="/contact" className="item">
          <h5>Contact</h5> 
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
