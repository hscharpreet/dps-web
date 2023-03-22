import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import "./CardCarousel.css";
// import Card from "./Card";
// import { motion } from "framer-motion";
// const responsive = {
//   0: { items: 1 },
//   768: { items: 2 },
//   1440: { items: 3 },
// };

// const items = [
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
//   <div className="item">
//     <Card />
//   </div>,
// ];

// const CardCarousel = () => (
//   <div className="carousel">
//   <div className="square" >
//     <span></span>
//   </div>
//   {/* <div className="littleSquare">
//   <span></span>
//   </div> */}
//   <div className="carouselCard">
//     <AliceCarousel
//       mouseTracking
//       items={items}
//       responsive={responsive}
//       controlsStrategy="alternate"
//     />
//   </div>
//   </div>
// );
import { Link } from "react-router-dom";
const CardCarousel = () => {
  return (
    <div class="cardGrid">
    <h1>THE LATEST FROM <br /> 
DIVINE</h1>
    <div className="cardRow row1">
      <div class="cardCol col1">
      <div className="cardImg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fchildrenday.webp?alt=media&token=6703e3ed-4cfe-4491-b91c-bff3af97b5ea"
          alt=""
        />
        </div>
        <Link to="/activities/images" >   <h2>CHILDREN DAY</h2></Link>
        <p>14 NOVEMEBER 2022</p>
      </div>
      <div class="cardCol col1">
      <div className="cardImg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Findependence.webp?alt=media&token=0b3c8226-43fe-46dc-a325-cd8c0ddb73f5"
          alt=""
        /> </div>
       <Link to="/activities/images" >   <h2>INDEPENDENCE DAY</h2></Link>
        <p>15 AUGUST 2022</p>
      </div>
      </div>
      <div className="cardRow  row2">
      <div class="cardCol col1">
      <div className="cardImg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fplanting.webp?alt=media&token=ffe46a70-13fe-4405-979f-3b497552ebdb"
          alt=""
        /> </div>
        <Link to="/activities/images" >  <h2>TREE PLANTATION</h2></Link>
        <p>12 OCTOBER 2022</p>
      </div>
      <div class="cardCol col2">
      <div className="cardImg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fsummer%20camp.webp?alt=media&token=cbe6dc2c-8781-4c50-b3ac-a6ebd9ee6592"
          alt=""
        />  </div>
       <Link to="/activities/images" >   <h2>SUMMER CAMP</h2></Link>
        <p>1-10 MAY 2022</p>
      </div>
      </div>
      <Link to="/activities" >   <p className="cardUpdates">SEE ALL OUR UPDATES</p></Link>
    </div>
  );
};

export default CardCarousel;
