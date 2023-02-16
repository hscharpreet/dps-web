import React from "react";
import "./Galllery.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "./GalleryData";

const Gallery = () => {
  return (
    <div className="activityGallery">
      <h1>Activities</h1>
      <div className="blogPost">
        {data.map((item, index) => {
          return (
            <div className="gridContainer" key={index}>
              <Link to="/activities/images">
                <img src={item.imgSrc} />
                <h2>{item.title}</h2>
              </Link>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Gallery;
