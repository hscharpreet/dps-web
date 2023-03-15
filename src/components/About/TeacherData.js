import React from "react";
import "./TeacherData.css";
import TeachersCard from "./TeachersCard";
const TeacherData = () => {
  return (
    <>
      <div className="teacherContainer">
        <div className="teacherBackground">
          <img
            src="https://t4.ftcdn.net/jpg/05/18/65/75/240_F_518657595_keQdDMCfv8SgYvjOgPMe8BCx7hkuplIf.jpg"
            alt=""
          />
        </div>
        <div className="faculty1">
          <h1 className="facultyHeading">Faculty and Staff </h1>
          <hr className="underline" />
          <div className="teacherData">
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
            <TeachersCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherData;
