import React from "react";
import "./Galllery.css";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { data } from "./GalleryData";

const Gallery = () => {
  return (
    <div className="activityGallery">
      <h1>Activities</h1>
      <hr className="line1" />

      <div className="blogPost">
        <div className="gridContainer">
          <div className="column1">
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider3.jpg?alt=media&token=b3396ffe-784b-44bb-b0b2-354ac2d39b67" alt="galleryimage"/>
              <h2>Math's Day</h2>
            </Link>
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider3.jpg?alt=media&token=b3396ffe-784b-44bb-b0b2-354ac2d39b67" alt="galleryimage"/>
              <h2>Children Day</h2>
            </Link>
          </div>
          <div className="column2">
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FBanner.jpg?alt=media&token=1d6d4c62-6feb-449b-9abd-412b0ec34984"  alt="galleryimage"/>
              <h2>26 January</h2>
            </Link>
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FBanner.jpg?alt=media&token=1d6d4c62-6feb-449b-9abd-412b0ec34984"  alt="galleryimage"/>
              <h2>Holi</h2>
            </Link>
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FBanner.jpg?alt=media&token=1d6d4c62-6feb-449b-9abd-412b0ec34984"  alt="galleryimage"/>
              <h2>Annual day</h2>
            </Link>
          </div>
          <div className="column3">
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider.jpg?alt=media&token=0cbed583-bf6d-4b5c-ae1c-619d3e0f785b"  alt="galleryimage"/>
              <h2>DayOut</h2>
            </Link>
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider.jpg?alt=media&token=0cbed583-bf6d-4b5c-ae1c-619d3e0f785b"  alt="galleryimage"/>
              <h2>Planting</h2>
            </Link>
            <Link to="/activities/images">
              <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider.jpg?alt=media&token=0cbed583-bf6d-4b5c-ae1c-619d3e0f785b"  alt="galleryimage"/>
              <h2>Independence Day</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
