import React from "react";
import "./visitCard.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const VisitCard = () => {
  return (
    <div className="visitCard">
      <div className="visitRow">
        <div className="visitCol">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <div className="visitOverlay">
            <hr className="visitLine" />
            <h1> Admissions </h1>
            <motion.button
              className="visitBtn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/admission" className="visitLink">
               See More
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="visitCol">
          <img
            src="https://plus.unsplash.com/premium_photo-1670884522503-0e0f10fae520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <div className="visitOverlay">
            <hr className="visitLine" />
            <h1> Prospectus</h1>
            <motion.button
              className="visitBtn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/admission" className="visitLink">
               See More
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="visitCol">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <div className="visitOverlay">
            <hr className="visitLine" />
            <h1> About </h1>
            <motion.button
              className="visitBtn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/admission" className="visitLink">
               See More
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
