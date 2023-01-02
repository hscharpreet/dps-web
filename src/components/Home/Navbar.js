import React, { useState, Fragment } from "react";
import "./Navbar.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.config";
import logo from "../../assets/Group 25.png";
import Button from "./Button";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const storageRef = doc(db, "home", "banner");
  onSnapshot(storageRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
  return (
    <>
      <div className={colorChange ? 'homeNavbar' : 'menuContainer'}>
        <nav className="homeNav">
          <a href="/" className="navbar-header logo">
            <img src={logo} alt="Logo" />
          </a>
          <Button />
        </nav>
      </div>
    </>
  );
};

export default Navbar;

