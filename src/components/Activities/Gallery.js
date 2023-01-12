import React from "react";
import "./Galllery.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "./GalleryData";
const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Activities</h1>
      <div className="galleryImage row">
        {data.map((item, index) => {
          return (
            <div className="column" key={index}>
              <div className="heading">
                <h2>{item.title}</h2>
              </div>

              <img src={item.imgSrc} alt="" />
              <div className="overlay">
                <motion.button
                  className="btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link to="/activities/images">
                    <span class="noselect">See More</span>
                  </Link>
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
