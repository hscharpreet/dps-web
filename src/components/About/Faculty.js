import React from "react";
import "./Faculty.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
const Faculty = () => {
  return (
    <div className="faculty">
      <div className="teacher-text">
      <h1>HELPING CHILDREN REACH THEIR FULL POTENTIAL</h1>
        <p>“A caring atmosphere with an exceptionally dedicated staff team. <br />
         They are committed to helping their students achieve their goals and are constantly striving to improve their teaching skills and methods.</p>
        <motion.button
          className="know-more"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/dps-web/about/teachers" style={{ textDecoration: "none" }}>
            <span>Know More</span>
          </Link>
        </motion.button>
      </div>
      <div className="teacher-img">
      <div className="imageDiv">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fteachers.webp?alt=media&token=75aeeb07-3001-48fb-a4da-3a30ec09bf4a" alt="teachers" />
        </div>
      </div>
    </div>
  );
};

export default Faculty;
