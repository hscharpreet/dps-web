import React from "react";
import "./DivineWelcome.css";


const DivineWelcome = () => {
  return (
    <div className="welcome">
      <div className="welcomeImage">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FwelcomeDivine%20(1).jpg?alt=media&token=c4c3b18e-965e-49dc-8ae3-db305a3e5d3a"
          alt=""
        />
      </div>
      <div className="welcome-text ">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FwelcomeDivine%20(1).jpg?alt=media&token=c4c3b18e-965e-49dc-8ae3-db305a3e5d3a" alt="" />
        <div className="textArea">
          <h1>WELCOME TO DIVINE</h1>
          <p>
            Divine public School was founded in 2008 as an independent, non
            sectarian, co-educational kindergarten-through eigth-grade
            institution, located in UttarPradesh. Divine was designed to provide
            an exceptional education for students in the rural area of Mirzapur. Its mission is to “prepare each of its students for college and for life in a global environment.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivineWelcome;
