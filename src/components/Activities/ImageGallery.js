import React from "react";
import { imageGallerydata } from "./ImageGalleryData";
import "./ImageGallery.css";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Home/Footer";
import { useParams } from "react-router";

const ImageGallery = () => {
  const { category } = useParams();

  return (
    <>
      <Navbar2 />
      <div className="imageBanner">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Factivity%2FimagegalleryBg%20(1).webp?alt=media&token=2d874cab-6c79-4013-8e13-cfb226c74919"
          alt=""
        />
      </div>
      <div className="images">
        <h1 >{category}</h1>
        <hr className="underline" />
        <div className="imageGallery">
          {imageGallerydata 
            .filter((item) => item.category === category)
            .map((item, index) => {
              return (
                <div className="pics" key={index}>
                  <img src={item.imgSrc} alt="imageGallery" />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImageGallery;
