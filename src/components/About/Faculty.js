import React from "react";
import "./Faculty.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
const Faculty = () => {
  return (
    <div className="faculty">
      <div className="teacher-text">
        <p>“A caring atmosphere with an exceptionally dedicated staff team.</p>
        <motion.button
          className="know-more"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/about/teachers" style={{ textDecoration: "none" }}>
            <span>Know More</span>
          </Link>
        </motion.button>
      </div>
      <div className="teacher-img">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fteacher.jpeg?alt=media&token=b012dbce-93aa-4885-a860-0ad6c3b726cd" alt="" />
      </div>
    </div>
  );
};

export default Faculty;
