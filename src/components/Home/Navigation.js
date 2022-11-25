import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <ul class="navigation">
        <Link to="/about" className="link">
          <li class="item">About</li>
        </Link>
        <Link to="/admission" className="link">
          <li class="item">Admission</li>
        </Link>
        <Link to="/information" className="link">
          <li class="item">Information</li>
        </Link>
        <Link to="/academics" className="link">
          <li class="item">Academics</li>
        </Link>
        <Link to="/activities" className="link">
          <li class="item">Activities</li>
        </Link>
        <Link to="/contact" className="link">
          <li class="item">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
