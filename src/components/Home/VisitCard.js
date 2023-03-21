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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fprospectus.jpg?alt=media&token=08fd401a-b938-4cbc-b647-c234038f47ae"
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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fform.jpg?alt=media&token=04dccf5e-4e98-4b90-930c-0bf0e7658859"
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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fabout.jpg?alt=media&token=cf482c18-4985-4602-ad62-e8f015db0eb4"
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
