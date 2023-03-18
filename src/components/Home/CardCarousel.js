import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CardCarousel.css";
import Card from "./Card";
// import { motion } from "framer-motion";
const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1440: { items: 3 },
};

const items = [
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
  <div className="item">
    <Card />
  </div>,
];

const CardCarousel = () => (
  <div className="carousel">
  <div className="square" >
    <span></span>
  </div>
  {/* <div className="littleSquare">
  <span></span>
  </div> */}
  <div className="carouselCard">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  </div>
  </div>
);

export default CardCarousel;
