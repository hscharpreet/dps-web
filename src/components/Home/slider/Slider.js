import { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import "./Slider.css";

// const Loader = () => {
//   return <div>Loading...</div>;
// };
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slideLength = SliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  // };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, auto, autoScroll, slideInterval]);

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                {/* {isLoaded ? ( */}
                  <img
                    src={slide.imgSrc}
                    alt="slideShow"
                    className="image"
                    onLoad={() => setIsLoaded(true)}
                  />
                {/* ) : (
                  <Loader />
                )} */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
