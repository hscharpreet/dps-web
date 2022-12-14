import React from "react";
import "./Galllery.css";
import { Link } from "react-router-dom";
import science from "../../assets/Banner.jpg";
const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Activities</h1>
      <div className="row row-1">
        <div className="col 1">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link>
        </button>
        </div>
      </div>
      <div className="col 2">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      <div className="col 3">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      <div className="col 4">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      </div>
      <div className="row row-2">
        <div className="col 1">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      <div className="col 2">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      <div className="col 3">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      <div className="col 4">
        <div className="column-heading">
            {" "}
            <h2>Math's day</h2>
          </div>
        <img src={science} alt="" className="image" />
        <div className="overlay">
          <button className="btn"><Link to="/activities/images" >
          <span class="noselect">See More</span>
        </Link></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
