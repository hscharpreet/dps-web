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
          <p></p>
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
          <Link to="/information" className="link">
            <h1>News and Events</h1>
          </Link>
          <Link to="/admission" className="link">
            <h1>Admission</h1>
          </Link>
          <Link to="/about" className="link">
            <h1>Alumni</h1>
          </Link>
        </div>
        <div className="column"></div>
      </div>
    </section>
  );
};

export default Footer;
