import React from "react";
import { TeacherData } from "./TeacherData";
import "./TeacherCard.css";
const TeachersCard = () => {
  return (
    <div
      className="teachersCard"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "3rem",
      }}
    >
      {TeacherData.map((item, index) => (
        <div
          className="tCard"
          key={index}
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <img src={item.imgSrc} alt="teacherphoto" />
          <h2>{item.name}</h2>
          <p>
            {" "}
            <span className="title">Title:</span> {item.qualification}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeachersCard;
