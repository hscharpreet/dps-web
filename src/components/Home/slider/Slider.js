import React from "react";
import { SliderData } from "./SliderData";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";
import ProgressiveImage from "react-progressive-graceful-image";

const properties = {
  duration: 3000,
  transitionDuration: 500,
  pauseOnHover: false,
  arrows: false,
  cssClass: "slide",
};

const Slider = () => {
  return (
    <div className="slider">
      <Fade {...properties}>
        {SliderData.map((slide, index) => {
          return (
            <div className="">
              <ProgressiveImage src={slide.imgSrc} placeholder={slide.blurhash}>
                {(src, loading) => (
                  <img
                    key={index}
                    src={src}
                    alt="slideShow"
                    className={`slide.imgSrc${
                      loading ? " loading" : " loaded"
                    }`}
                    width="100%"
                    height="100%"
                  />
                )}
              </ProgressiveImage>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slider;
