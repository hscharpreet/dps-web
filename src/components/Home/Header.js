import React from "react";
// import Navbar from "./Navbar";
import "./Header.css";
import Slider from "./slider/Slider";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header1">
          <h1>
            BE <br /> UNDEFINABLE
          </h1>
        </div>
        <div className="header2">
          <span className="slider">
            <Slider />
          </span>
       
        </div>

      </div>
    </>
  );
};

export default Header;
