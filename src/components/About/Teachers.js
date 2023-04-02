import React from "react";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Home/Footer";
import TeachersCard from "./TeachersCard";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div>
      <Navbar2 />
      <div className="teacherContainer">
        <div className="teacherBackground">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fteachers.webp?alt=media&token=5cd7688b-2d58-40a5-b3e6-00a807cca6f7"
            alt="teachers"
          />
        </div>
        <div className="faculty1">
          <h1 className="facultyHeading">Faculty and Staff </h1>
          <hr className="underline" />
          <div className="teacherData">
            <TeachersCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teachers;
