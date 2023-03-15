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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fvisitcard.avif?alt=media&token=a913a421-8677-43de-9624-51ac883423a0"
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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fvisit1.avif?alt=media&token=a3408cc0-6757-4063-9a09-00e9f9fb8cdb"
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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fvisit3.avif?alt=media&token=71ca68e7-6781-4466-99fc-65408882aa6d"
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
