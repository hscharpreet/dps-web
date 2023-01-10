import React from "react";
import { data } from "./ImageGalleryData";
import "./ImageGallery.css";
import Navbar2 from "../Navbar2/Navbar2";
const ImageGallery = () => {
  return (
    <>
<Navbar2/>
   <h1 className="galleryHeading">Math's Day</h1>
   <hr className='underline' />
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
