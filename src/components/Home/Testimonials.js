import { useState, useEffect } from "react";
import "./Testimonials.css";
import { TestimonialData } from "./TestimonialData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
      <div className="testimonial">
        {TestimonialData.map((data, index) => {
          return (
            <div
              className={index === currentSlide ? "testimonialRow current" : "testimonialRow"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <div className="col image">
                    <img className="parentsImg" src={data.image} alt="parents" />
                  </div>
                  <div className="col voices">
                    <h3>{data.heading2}</h3>
                    <h1>{data.heading1}</h1>
                    <div className="descr">
                      <p>{data.desc}</p>
                    </div>
                    <div className="parents-name">
                      <p>
                        {" "}
                        {data.parentsName} <span className="line"></span> Parent
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      </div>
    </>
  );
};

export default Testimonials;


