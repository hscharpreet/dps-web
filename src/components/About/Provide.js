import React from "react";
import "./Provide.css";
import photo from "../../assets/children.jpeg";
const Provide = () => {
  return (
    <div className="provideContainer">
      <div className="provide1 col">
        <img src={photo} alt="" />
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
      </div>
      <div className="provide2 col">
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
        <img src={photo} alt="" />
      </div>
      <div className="provide3 col">
        <img src={photo} alt="" />
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
      </div>
      <div className="provide4 col">
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
        <img src={photo} alt="" />
      </div>
      <div className="provide5 col">
        <img src={photo} alt="" />
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
      </div>
      <div className="provide6 col">
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Provide;
