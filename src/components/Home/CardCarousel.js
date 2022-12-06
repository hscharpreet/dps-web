import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CardCarousel.css";
import Card from "./Card";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
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
  <div className="carouselCard">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  </div>
);

export default CardCarousel;
