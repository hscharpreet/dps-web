import React from "react";
import "./CardCarousel.css";
import { Link } from "react-router-dom";
import { cardData } from "./CardCarouselData";


const CardCarousel = () => {
  return (
    <div className="cardGrid">
      <h1>
        THE LATEST FROM <br />
        DIVINE
      </h1>

      <div className="cardCarousel">
        {cardData.map((data, index) => {
          return (
            <div class="blog-post-teasers">
              <article class="blog-post-teaser">
                <figure>
                  <img src={data.imgSrc} alt="activities" key={index} />
                  <figcaption>
                    <div>
                     <h1>{data.title}</h1>  <br /> 
                      <span className="cardBtn">
                        <Link to="/dps-web/activities" className="cardLink">
                          see More
                        </Link>
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </article>
            </div>
          );
        })}
      </div>
      <p className="cardUpdates">
        <Link to="/dps-web/activities"> SEE ALL OUR UPDATES</Link>
      </p>
    </div>
  );
};

export default CardCarousel;
