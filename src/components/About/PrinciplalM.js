import React from "react";
import "./PrincipalM.css";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";
const PrinciplalM = () => {
  return (
    <>
      <div className="messageContainer">
        <IconContext.Provider value={{ className: "icon2" }}>
          <div className="headName ">
            <h1>Meet the head</h1>
            <p>Mrs.Pinki Gupta</p>
          </div>
          <div className="message ">
            <div className="principalImage ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FRectangle%203.png?alt=media&token=4e013192-9fdf-416e-a977-b9d9c07d61bd"
                alt=""
              />
            </div>
            <div className="parah ">
              <h3 className="principaHeading">
                <span className="line1"></span> PRINCIPAL'S MESSAGE{" "}
              </h3>
              <p>
                " My leadership role will focus on providing an enabling
                environment for the children so that they can be nurtured and
                guided towards becoming future leaders and ideal citizens of our
                great nation. Pursuing excellence by students in their chosen
                fields; academics, sports, or extracurricular activities shall
                be encouraged at every step." 
                <NavLink to="/about/principal-message">
                  <span className="readMore">  read more</span>{" "}
                  <HiOutlineArrowLongRight />
                </NavLink>
              </p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default PrinciplalM;



