import React, { Suspense}  from "react";
import Navbar from "./Navbar";
import "./Header.css";
import Slider from "./slider/Slider";
import Loading from "../../Loading";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Suspense fallback={<Loading />}>
        <Slider className="slide" />
        </Suspense>
        <h1 className="animate-charcter">
          WELCOME TO <br />
          <span> DIVINE</span> <br /> PUBLIC SCHOOL
        </h1>

     
      </div>
    </>
  );
};

export default Header;

