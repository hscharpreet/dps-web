import React from "react";
import "./Galllery.css";
import { Link } from "react-router-dom";
import { data } from "./GalleryData";

const Gallery = () => {
  return (
    <>
      <div className="activityBanner">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Factivity%2Factivitybanner.webp?alt=media&token=d68b9470-4489-437b-be3a-24b8a7aa4ab5"
          alt=""
        />
      </div>
      <div className="activityGallery">
        <p>MUCH MORE THAN JUST AN EDUCATION</p>
        <h1>EXTRA CURRICULAR ACTIVITIES</h1>
        <hr className="line1" />
        <div className="gridContainer">
          {data.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.imgSrc} alt="galleryimage" />
              <Link to={`${item.title.toLowerCase().replace(/ /g, "-")}`}>
                <h2>{item.title}</h2>
                <p>{item.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
