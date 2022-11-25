import React from "react";
import Slider from "react-slick";
import "./GallerySlider.css";
import images from "./Images";
import "./GallerySlidertheme.css";

const GallerySlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((image) => {
          <img src={image} alt="" />;
        })}
      </Slider>
    </>
  );
};

export default GallerySlider;
