import React from "react";
import banner from "../../assets/Banner.jpg";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="banner">
      <div className="bannerImg">
        <img src={banner} alt="" />
      </div>
      <div className="bannerNav">
        <ul class="aboutNav">
          <Link to="/about" className="link">
            <li class="item">About us</li>
          </Link>
          <span className="line"></span>
          <Link to="/admission" className="link">
            <li class="item">principle message</li>
          </Link>
          <span className="line"></span>
          <Link to="/information" className="link">
            <li class="item">faculty member</li>
          </Link>
          <span className="line"></span>
          <Link to="/academics" className="link">
            <li class="item">Alumni</li>
          </Link>
          <span className="line"></span>
          <Link to="/activities" className="link">
            <li class="item">our sponser</li>
          </Link>
          <span className="line"></span>
          <Link to="/contact" className="link">
            <li class="item">map and direction</li>
          </Link>
        </ul>
      </div>
     <hr className="horizontalLine"/>
    </div>
  );
};

export default AboutPage;
