import { useState, useEffect } from "react";
import "./Testimonials.css";
import shape2 from "../../assets/Ellipse 7.png";
import { TestimonialData } from "./TestimonialData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = TestimonialData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

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
  }, [currentSlide]);

  return (
    <>
      <div className="testimonial">
       
          {TestimonialData.map((data, index) => {
            return (
              <div className="row">
              <div
                className={index === currentSlide ? "col current" : "col"}
                key={index}
              >
                {index === currentSlide && (
                  <div>
                    <AiOutlineArrowLeft
                      className="arrow prev"
                      onClick={prevSlide}
                    />
                    <AiOutlineArrowRight
                      className="arrow next"
                      onClick={nextSlide}
                    />
                    {/* <img src={shape2} alt="" className="shape-2" /> */}
                    <img className="parents-img" src={data.image} alt="image" />

                    <div className="col voices">
                      <h3>{data.heading2}</h3>
                      <h1>{data.heading1}</h1>
                      <p>{data.desc}</p>
                      <div className="parents-name">
                        <p> {data.parentsName}</p>{" "}
                        <span className="line"></span> <p> Parent</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              </div>
            );
          })}
        </div>
      
    </>
  );
};

export default Testimonials;
