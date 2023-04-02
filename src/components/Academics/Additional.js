import React from "react";
import "./Addition.css";
import { BsLaptop } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { FcGraduationCap } from "react-icons/fc";
import { MdSportsVolleyball } from "react-icons/md";
import { IconContext } from "react-icons/lib";
const Additional = () => {
  return (
    <div className="additional">
      <IconContext.Provider value={{ color: "#d6d638", className: "icon4" }}>
        <h1>Additional Activities</h1>
        <div className="addon">
          <div className="add1">
            <p>
              <BsLaptop />
            </p>
            <p>ONLINE CLASS</p>
          </div>
          <div className="add2">
            <p>
              <IoBookSharp />
            </p>
            <p>INCL. BOOKS</p>
          </div>
          <div className="add3">
            <p>
              <FcGraduationCap />
            </p>
            <p>CERTIFICATIONS</p>
          </div>
          <div className="add4">
            <p>
              <MdSportsVolleyball />
            </p>
            <p>MANY SPORTS</p>
          </div>
        </div>
      </IconContext.Provider>

      <div className="additionalGrid">
        <div className="column-one">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FBanner.jpg?alt=media&token=1d6d4c62-6feb-449b-9abd-412b0ec34984"
            alt=""
          />
        </div>
        <div className="column-two">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FDSCN0174%20(1).jpg?alt=media&token=90948ec4-e7d5-4bd7-8fc9-86dab40cee9b"
            alt=""
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider.jpg?alt=media&token=0cbed583-bf6d-4b5c-ae1c-619d3e0f785b"
            alt=""
          />
        </div>
        <div className="column-three">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider2.jpg?alt=media&token=3bcc857b-6e5c-4822-93c7-94d3f3caeda0"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider3.jpg?alt=media&token=b3396ffe-784b-44bb-b0b2-354ac2d39b67"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
