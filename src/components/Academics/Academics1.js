import React from "react";
import "./Academics1.css";
const Academics1 = () => {
  return (
    <>
      <div className="academicsBanner">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fteaching.webp?alt=media&token=a0130282-1be1-451d-9a23-b88ad9ffc72a"
          alt=""
        />
      </div>
      <div className="academics1">
        <h1>Academics</h1>
        <hr className="academicLine" />
        <h2>
          We share a mission while tailoring each school to the strengths and
          needs of each age group
        </h2>
        <p>
          There are three schools – also referred to as divisions – under the
          umbrella of the Divine Public School.
        </p>

        <ol>
          <li>Kindergarten</li>
          <li>Elementary School (preschool through grade 5)</li>
          <li>Middle School (grades 6 - 8)</li>
        </ol>
      </div>
    </>
  );
};

export default Academics1;
