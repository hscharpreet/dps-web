import { useState, useEffect } from "react";
import "./Testimonials.css";
import Loading from "../../Loading";
import { TestimonialData } from "./TestimonialData";
import React, { Suspense}  from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = TestimonialData.length;

  // const autoScroll = true;
  // let slideInterval;
  // let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // function auto() {
  //   slideInterval = setInterval(nextSlide, intervalTime);
  // }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  // useEffect(() => {
  //   if (autoScroll) {
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide]);

  return (
    <>
      <div className="testimonialContainer">
     <div className="testi">
          {TestimonialData.map((data, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "testimonial current"
                    : "testimonial"
                }
                key={index}
              >
                {index === currentSlide && (
                  <div className="testimonialRow">
                  <div className="col voices">
                      <h3>{data.heading2}</h3>
                      <h1>{data.heading1}</h1>
                      <div className="descr">
                        <p>{data.desc}</p>
                      </div>
                      <div className="parents-name">
                        <p>
                          {" "}
                          {data.parentsName}{" "}
                          <span className="testimonialLine"></span> Parent
                        </p>
                      </div>
                    </div>
                    <div className="col testimonialImage">
                    <Suspense fallback={<Loading />}>
                      <img
                        src={data.image}
                        alt="parents"
                      />
                      </Suspense>
                    </div>
                  
                  </div>
                )}

                
              </div>
            );
          })}
          <KeyboardDoubleArrowLeftIcon className="arrow prev" fontSize="large" onClick={prevSlide} />
          <KeyboardDoubleArrowRightIcon className="arrow next" fontSize="large" onClick={nextSlide} />
          </div>
              </div>
         
     
    </>
  );
};

export default Testimonials;


