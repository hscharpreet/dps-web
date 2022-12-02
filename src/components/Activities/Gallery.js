import React from "react";
import "./Galllery.css";
import science from "../../assets/Banner.jpg";
const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Activities</h1>
      <div className="row row-1">
        <div className="col 1">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      <div className="col 2">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      <div className="col 3">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      <div className="col 4">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      </div>
      <div className="row row-2">
        <div className="col 1">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      <div className="col 2">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      <div className="col 3">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      <div className="col 4">
        <div className="column-heading">
            {" "}
            <h1>Math's day</h1>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><a href="/math">See More</a></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
