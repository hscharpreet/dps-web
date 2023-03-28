import React, { lazy, Suspense } from 'react';
import { SliderData } from "./SliderData";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";

const properties = {
  duration: 3000,
  transitionDuration: 500,
  pauseOnHover: false,
  arrows:false,
  cssClass: 'slide',
};

const Slider = () => {

  
  return (
    <div className="slider" >
      <Fade {...properties}>
        {SliderData.map((slide, index) => {
          return (
            <img
              key={index}
              rel="preload"
              src={slide.imgSrc}
              alt="slideShow"
              className="image"
             
            />
          );
        })}
      </Fade>
    </div>
  );
};

export default Slider;
