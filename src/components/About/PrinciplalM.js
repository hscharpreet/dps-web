import React from "react";
import "./PrincipalM.css";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";
const PrinciplalM = () => {
  return (
    <>
      <div className="aboutBanner">
        <img
          src="https://img.freepik.com/free-photo/top-view-copy-space-colorful-pencils-green-background_141793-11456.jpg?w=1480&t=st=1680293791~exp=1680294391~hmac=6f3270babb6b8859f709ca268c3e40b3d226c69d16cd0378c600d7213bed9f68"
          alt="aboutBanner"
        />
      </div>
      <div className="messageContainer">
        <IconContext.Provider value={{ className: "icon2" }}>
          <div className="headName ">
            <h1>Meet the head</h1>
            <p>Mrs.Pinki Gupta</p>
          </div>
          <div className="message ">
            <div className="principalImage ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fprincipal.webp?alt=media&token=9220c5f8-b000-4e16-8dfd-a9d0d3f9af60"
                alt="principalImage"
              />
            </div>
            <div className="messageParah ">
              <h3 className="principaHeading">
                <span className="line1"></span> A FEW WORDS OF WELCOME FROM OUR
                HEAD
              </h3>
              <p>
                " My leadership role will focus on providing an enabling
                environment for the children so that they can be nurtured and
                guided towards becoming future leaders and ideal citizens of our
                great nation. Pursuing excellence by students in their chosen
                fields; academics, sports, or extracurricular activities shall
                be encouraged at every step."
                <NavLink to="/dps-web/about/principal-message">
                  <span className="readMore"> read more</span>{" "}
                  <HiOutlineArrowLongRight />
                </NavLink>
              </p>
            </div>
          </div>
        </IconContext.Provider>
      </div>

      <div className="aboutSchool">
        <p>
          Divine public School was founded in 2008 as an independent, non
          sectarian, co-educational kindergarten-through eigth-grade
          institution, located in UttarPradesh. Divine was designed to provide
          an exceptional education for students in the rural area of Mirzapur.
          Its mission is to prepare each of its students for college and for
          life in a global environment.
        </p>
      </div>
    </>
  );
};

export default PrinciplalM;
