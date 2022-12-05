import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Ellipse 2.png";
const Navbar = () => {
  return (
    <div className="nav">
      <ul class="navigation">
        <div className="leftNav">
          {" "}
          <Link to="/" className="link">
            <div class=" divineLogo">
              {" "}
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
          {/* <Link to="/information" className="link">
          <li class="item">Information</li>
        </Link> */}

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
