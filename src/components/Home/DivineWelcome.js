import React from "react";
import "./DivineWelcome.css";
import ProgressiveImage from "react-progressive-graceful-image";

const DivineWelcome = () => {
  const image =
    "https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2FwelcomeDivine.jpg?alt=media&token=37920764-b436-46e6-aa04-67219dbf2453";

  const blurImage =
    "https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FcompressedImages%2FwelcomeDivine_11zon_11zon_11zon.webp?alt=media&token=c4f1d2c3-c819-4d8b-b7c8-36a4d1f53ebe";
  return (
    <div className="welcome">
      <div className="welcomeImage">
        <ProgressiveImage src={image} placeholder={blurImage}>
          {(src, loading) => (
            <img
              src={src}
              alt="welcome"
              className={`image${loading ? " loading" : " loaded"}`}
              width="100%"
              height="100%"
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="welcome-text ">
        <ProgressiveImage src={image} placeholder={blurImage}>
          {(src, loading) => (
            <img
              src={src}
              alt="welcome"
              className={`image${loading ? " loading" : " loaded"}`}
              width="100%"
              height="100%"
            />
          )}
        </ProgressiveImage>

        <div className="textArea">
          <h1>WELCOME TO DIVINE</h1>
          <p>
            Divine public School was founded in 2008 as an independent, non
            sectarian, co-educational kindergarten-through eigth-grade
            institution, located in UttarPradesh. Divine was designed to provide
            an exceptional education for students in the rural area of Mirzapur.
            Its mission is to “prepare each of its students for college and for
            life in a global environment.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivineWelcome;
