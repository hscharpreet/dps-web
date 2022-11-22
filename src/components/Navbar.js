import React from "react";
import "./Navbar.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import logo from "../assets/Group 25.png";
import Button from "./Button";

const Navbar = () => {
  const storageRef = doc(db, "home", "banner");
  onSnapshot(storageRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
  return (
    <>
     
        <div class="menu-container">
          <nav>
            <a href="/" class="navbar-header logo">
              <img src={logo} alt="Logo" />
            </a>
              <Button/>
          </nav>
        </div>
     
    </>
  );
};

export default Navbar;
