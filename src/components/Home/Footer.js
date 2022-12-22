import React from "react";
import "./Footer.css";
import logo from "../../assets/Group 29.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className=" address ">
          <img src={logo} alt="" />
          <p className="addressText">
            Robert Robertson, <br />
            1234 NW Bobcat Lane, <br />
            St. Robert, <br />
            MO 65584-5678
          </p>
        </div>
        <div className="line "></div>
        <div class="column col-1">
          <Link to="/" className="link">
            <h1>Home</h1>
          </Link>
          <Link to="/activities" className="link">
            <h1>Activities</h1>
          </Link>
          <Link to="/activities" className="link">
            <h1>Gallery</h1>
          </Link>
          <Link to="/information" className="link">
            <h1>Curriculam</h1>
          </Link>
          <Link to="/contact" className="link">
            <h1>Map</h1>
          </Link>
        </div>
        <div class="column col-2">
          <Link to="/about" className="link">
            <h1>About</h1>
          </Link>
          <Link to="/" className="link">
            <h1>Testimonials</h1>
          </Link>
          <Link to="/academics" className="link">
            <h1>News and Events</h1>
          </Link>
          <Link to="/admission" className="link">
            <h1>Admission</h1>
          </Link>
          <Link to="/about" className="link">
            <h1>Alumni</h1>
          </Link>
        </div>
        
      </div>
      <div className="copyright">
        <div className="left">
          <p>&#169; 2022 DivinePublic School. Developed by Parul Thakur - Web Developer</p>
        </div>
        <div className="right">
          Term and condition  | Privacy Policy
        </div>
      </div>
    </section>
  );
};

export default Footer;
