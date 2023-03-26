// import { useState, useEffect } from "react";
// import { SliderData } from "./SliderData";
// import "./Slider.css";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const slideLength = SliderData.length;

//   const autoScroll = true;
//   let slideInterval;
//   let intervalTime = 5000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

//   function auto() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       auto();
//     }
//     return () => clearInterval(slideInterval);
//   }, [currentSlide, auto, autoScroll, slideInterval]);

//   return (
//     <div className="slider">
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === currentSlide ? "slide current" : "slide"}
//             key={index}
//           >
//             {index === currentSlide && (
//               <div>
//                   <img
//                   rel="preload"
//                     src={slide.imgSrc}
//                     alt="slideShow"
//                     className="image"
//                     onLoad={() => setIsLoaded(true)}
//                   />

//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Slider;
import React from "react";
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
