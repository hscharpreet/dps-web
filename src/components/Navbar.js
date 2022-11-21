import React from "react";
import "./Navbar.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/Group 25.png";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const storageRef = doc(db, "home", "banner");
  onSnapshot(storageRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
  return (
    <>
      <IconContext.Provider value={{ size: "30px" }}>
        <div class="menu-container">
          <nav>
            <a href="/" class="navbar-header logo">
              <img src={logo} alt="Logo" />
            </a>

            <div className="menu-dropdown">
              <h1 className="menu-icon">
                <p className="underline">MENU</p>
                <i className="icon">
                  {" "}
                  <GiHamburgerMenu />
                </i>
              </h1>
              <ul class="dropdown-content">
                <Link to="/about" className="link">
                  <li class="item">About</li>
                </Link>
                <Link to="/admission" className="link">
                  <li class="item">Admission</li>
                </Link>
                <Link to="/information" className="link">
                  <li class="item">Information</li>
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
              </ul>
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
