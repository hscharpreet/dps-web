import React from "react";
import "./Faculty.css";
import teachers from "../../assets/teachers.png";

const Faculty = () => {
  return (
    <div className="faculty">
      <div className="teacher-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the induer.
        </p>
        <button className="know-more">Know More</button>
      </div>
      <div className="teacher-img">
      <img src={teachers} alt="" />
      </div>
      
    </div>
  );
};

export default Faculty;
