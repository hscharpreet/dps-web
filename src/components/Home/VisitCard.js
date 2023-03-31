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
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Fheader.webp?alt=media&token=1e9145af-7da4-4dbc-9f70-ab0222331efb"
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
              <Link to="/dps-web/admission" className="visitLink">
                Know More
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="visitCol">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Fform.jpg?alt=media&token=7c04e0ef-98ef-471b-ba07-6f2ae4437766"
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
              <Link to="/dps-web/admission" className="visitLink">
              Know  More
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="visitCol">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Fprospectus.jpg?alt=media&token=69cc10bd-cacd-4839-aacc-76adb15e642b"
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
              <Link to="/dps-web/admission" className="visitLink">
              Know  More
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
