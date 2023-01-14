import React from "react";
import "./Galllery.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "./GalleryData";
const Gallery = () => {
  return (
    <div className="activityGallery">
     <h1>Activities</h1>
      {data.map((item, index) => {
          return (
            <ul className="rowGallery">
        <li>
        <Link to = "/activities/images">
        <div className="blogPost">
         <img src={item.imgSrc} /> 
         <h2>{item.title}</h2>
         </div>
         </Link>
         </li>
        </ul>
        );
    })};
      
    </div>
  );
};

export default Gallery;
