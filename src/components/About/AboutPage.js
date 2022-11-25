import React from "react";
import banner from "../../assets/Banner2.png";
import { Link } from "react-router-dom";
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src={banner} alt="" />
      </div>
      <div className="banner-nav">
      <ul class="about-nav">
        <Link to="/about" className="link">
          <li class="item">About us</li>
        </Link>
        <Link to="/admission" className="link">
          <li class="item">principle message</li>
        </Link>
        <Link to="/information" className="link">
          <li class="item">faculty member</li>
        </Link>
        <Link to="/academics" className="link">
          <li class="item">Alumni</li>
        </Link>
        <Link to="/activities" className="link">
          <li class="item">our sponser</li>
        </Link>
        <Link to="/contact" className="link">
          <li class="item">map and direction</li>
        </Link>
     
      </ul>
      <span></span>
      </div>
      
    </div>
  );
};

export default AboutPage;
