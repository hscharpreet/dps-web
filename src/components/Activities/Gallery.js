import React from "react";
import "./Galllery.css";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import science from "../../assets/Banner.jpg";
const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Activities</h1>
      <div className="row row-1">
        <div className="col 1">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      <div className="col 2">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      <div className="col 3">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      <div className="col 4">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      </div>
      <div className="row row-2">
        <div className="col 1">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      <div className="col 2">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      <div className="col 3">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      <div className="col 4">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
        <motion.button className="btn" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </motion.button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
