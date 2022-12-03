import React from "react";
import { data } from "./GalleryData";
import "./ImageGallery.css";
const ImageGallery = () => {
  return (
    <>
      <div className="imageGallery">
        {data.map((item, index) => {
          return (
            <ul className="pics" key={index}>
              <li>
                <img src={item.imgSrc} alt="" />
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
