import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import Slider from "./slider/Slider";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Slider className="slide" />
        <h1 className="animate-charcter">
          WELCOME TO <br />
          <span> DIVINE</span> <br /> PUBLIC SCHOOL
        </h1>

     
      </div>
    </>
  );
};

export default Header;
