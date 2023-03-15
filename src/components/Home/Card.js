import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Card = () => {
  return (
    <div className="cardItem">
      <motion.div className="cardImg" whileTap={{ scale: 0.9 }}>
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider.jpg?alt=media&token=0cbed583-bf6d-4b5c-ae1c-619d3e0f785b" alt="" />
      </motion.div>
      <div className="cardText">
        <h1>Math's Day</h1>
        <button className="btn">
          <Link to="/activities/images" style={{ textDecoration: "none" }}>
            <motion.h4 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {" "}
              See More <ArrowForwardIcon />
            </motion.h4>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
