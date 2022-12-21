import React from "react";
import "./visitCard.css"
const VisitCard = () => {
  return (
    <div className="visitCard">
      <div className="visitRow">
        <div className="visitCol">
          <div className="underline"></div>
          <h1> Admissions </h1>
        </div>
        <div className="visitCol">
          <div className="underline"></div>
          <h1> Prospectus </h1>
        </div>
        <div className="visitCol">
          <div className="underline"></div>
          <h1> About </h1>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
