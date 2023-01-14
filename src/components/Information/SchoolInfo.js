import React from "react";
import "./SchoolInfo.css";
import { Link } from "react-router-dom";
const SchoolInfo = () => {
  return (
    <div className="schoolInfo">
      <h1>Find out everything you need to know about Divine here.</h1>

      <div className="schoolRow">
        <div className="infoCol">
          <div className="infoText">
            <h2>Staff and Governors</h2>
          </div>
          <div className="infoLink">
            <Link to="/activities">READ MORE -- </Link>
          </div>
        </div>
        <div className="infoCol">
        <div className="infoText">
            <h2>Staff and Governors</h2>
          </div>
          <div className="infoLink">
            <Link to="/activities">READ MORE -- </Link>
          </div>
        </div>
        <div className="infoCol">
        <div className="infoText">
            <h2>Staff and Governors</h2>
          </div>
          <div className="infoLink">
            <Link to="/activities">READ MORE -- </Link>
          </div>
        </div>
        <div className="infoCol">
        <div className="infoText">
            <h2>Staff and Governors</h2>
          </div>
          <div className="infoLink">
            <Link to="/activities">READ MORE -- </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
