import React from "react";
import "./Provide.css";

const Provide = () => {
  return (
    <div className="provideContainer">
      <div className="provide p1">
      <div className="im">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FDSCN0174%20(1).jpg?alt=media&token=90948ec4-e7d5-4bd7-8fc9-86dab40cee9b" alt="" />
        </div>
        <div className="provideContent">
          <h1>Comforting Environment</h1>
          <p>
            Each child's mental and physical safety is of utmost importance to
            us
          </p>
        </div>
      </div>
      <div className="provide p2">
        <div className="provideContent">
          <h1>Maintaining Momentum</h1>
          <p>
          We offer our children many leadership and teamwork opportunities to build their confidence and prepare them for future challenges.
          </p>
        </div>
        <div className="im">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Factivity.webp?alt=media&token=62ac87f5-3c1d-487d-bb75-e1eb3cb00e0a" alt="" />
        </div>
      </div>
      <div className="provide p1">
      <div className="im">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fdrawingkids.webp?alt=media&token=6679fcc4-7247-4219-8562-57c28df7ece9" alt="" />
        </div>
        <div className="provideContent">
          <h1>Looking further afield</h1>
          <p>
          As our children make their way through Divine, we aim to prepare them for life beyond our walls, teaching them that they can have a positive effect on the world around them.
          </p>
        </div>
      </div>

    
    </div>
  );
};

export default Provide;
