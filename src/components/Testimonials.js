import React from "react";
import "./Testimonials.css";
import shape1 from "../assets/Ellipse 4.png";
import shape2 from "../assets/Ellipse 7.png";


const Testimonials = () => {
  return (
    <>
      <div className="testimonial">
      <div className="row">
      <div className="col">
        <img src={shape1} alt="" className="shape-1" />
        <img src={shape2} alt="" className="shape-2" />
        <img className="parents-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="col voices">
        <h3>Our Voices</h3>
        <h1>TESTIMONIALS</h1>
        <p>
          The core beliefs of Divine, which the faculty and administration
          embrace and exeplify, have been essenetial to our daughters’
          intellectual, emotional and spiritual developement.
        </p>
        <div className="parents-name">
         <p> Rohan Kumar</p> <span className="line"></span> <p> Parent</p>
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Testimonials;
