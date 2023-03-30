import { useState, useEffect } from "react";
import "./Testimonials.css";
import { TestimonialData } from "./TestimonialData";
import ProgressiveImage from "react-progressive-graceful-image";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { IconContext } from "react-icons/lib";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = TestimonialData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <>
      <div className="testimonialContainer">
        <IconContext.Provider value={{ className: "testimonialArrow"}}>
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
                        <ProgressiveImage
                          src={data.image}
                          placeholder={data.blurhash}
                        >
                          {(src, loading) => (
                            <img
                              key={index}
                              src={src}
                              alt="parents"
                              className={`data.image${
                                loading ? " loading" : " loaded"
                              }`}
                              width="100%"
                              height="100%"
                            />
                          )}
                        </ProgressiveImage>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <IoIosArrowDropleftCircle
              className="arrow prev"
              onClick={prevSlide}
            />
            <IoIosArrowDroprightCircle
              className="arrow next"
              onClick={nextSlide}
            />
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Testimonials;
