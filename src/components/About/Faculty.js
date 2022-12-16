import React from "react";
import "./Faculty.css";
import { Link } from "react-router-dom";
import teachers from "../../assets/teachers.png";
import { motion } from "framer-motion";
const Faculty = () => {
  return (
    <div className="faculty">
      <div className="teacher-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the induer.
        </p>
        <motion.button className="know-more" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/about/teachers" style={{textDecoration: 'none'}}>
          <span >Know  More</span>
          </Link>
          </motion.button>
      </div>
      <div className="teacher-img">
      <img src={teachers} alt="" />
      </div>
      
    </div>
  );
};

export default Faculty;
