import React, { useState } from "react";
import "./Navbar.css";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "../../firebase.config";
import Button from "./Button";
import { useEffect } from "react";

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      setIsTop(isTop);
    });
  }, []);

  return (
    <>
      <div className={`navbar ${!isTop ? "navbar-scrolled" : ""}`}>
        <nav className="homeNav">
          <a href="/" className="navbar-header logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FdivineLogo.png?alt=media&token=866b1568-ba61-44b7-8706-f61fe44b8c70" alt="Logo" />
          </a>
          
          <Button />
        </nav>
      </div>
    </>
  );
};

export default Navbar;

// const storageRef = doc(db, "/home/header/navbar/menu");
// onSnapshot(storageRef, (doc) => {
//   console.log(doc.data(), doc.id);
// });
