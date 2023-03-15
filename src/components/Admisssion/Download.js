import React from "react";
import "./Download.css";
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
const Download = () => {
  return (
    <div className="download">
        <IconContext.Provider
            value={{ color: "#d6d638", className: "icon3" }}
          >
      <div className="funding">
        <p>
          Please check eligibility of the Free Early Education Entitlement  <br /> on
          the Nursery Government Funding page for Early Years places.
        </p>{" "}
       
        <p>
          Application is made by filling in the <span> application form.</span>
          <br /> You can also
          register for an Open Morning or Book a visit.
        </p>
      </div>
      <div className="usefulDownloads">
      <div className="usefulImg">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FDSCN0174%20(1).jpg?alt=media&token=90948ec4-e7d5-4bd7-8fc9-86dab40cee9b" alt="" />
        </div>
        <div className="links">
        <h1>Useful Links</h1>
          <p> <BsFillArrowRightSquareFill/>  <NavLink to="/admission/fees" className="link">Aplication form</NavLink></p>
         
          <p> <BsFillArrowRightSquareFill/>  <NavLink to="/admission/fees" className="link">Fees</NavLink></p>
        </div>
      </div>
      </IconContext.Provider>
    </div>
  );
};

export default Download;
