import React from "react";
import { data } from "./GalleryData";
import "./ImageGallery.css";
import Navbar from "../Navbar/Navbar";
const ImageGallery = () => {
  return (
    <>
<Navbar/>
   <h1 className="galleryHeading">Math's Day</h1>
 
      <div className="imageGallery">
      
        {data.map((item, index) => {
          return (
            
            <div className="pics" key={index}>
                <img src={item.imgSrc} alt="" /> 
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
