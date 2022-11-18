import React from "react";
import "./Testimonials.css";
import shape1 from "../assets/Ellipse 4.png";
import shape2 from "../assets/Ellipse 7.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial">
        <img src={shape1} alt="" />
        <img src={shape2} alt="" />
        <div className="voices">
        <h3>Our Voices</h3>
        <h1>TESTIMONIALS</h1>
        <p>
          The core beliefs of Divine, which the faculty and administration
          embrace and exeplify, have been essenetial to our daughters’
          intellectual, emotional and spiritual developement.
        </p>
        <p>
          Rohan Kumar <span></span> Parent
        </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
