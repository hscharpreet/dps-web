import React, { useState} from "react";
import "./Navbar.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.config";
import logo from "../../assets/Group 25.png";
import Button from "./Button";
import { useEffect } from "react";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      setIsTop(isTop);
    });
  }, []);

  const storageRef = doc(db, "home", "banner");
  onSnapshot(storageRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
  return (
    <>
      <div  className={`navbar ${!isTop ? "navbar-scrolled" : ""}`}>
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

