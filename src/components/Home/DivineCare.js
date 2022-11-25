import React from "react";
import "./DivineCare.css";
import kids from "../../assets/Group 27.png";
import yellow from "../../assets/Rectangle 20.png";

const DivineCare = () => {
  return (
    <>
      <section id="divine-care">
        <div className="img-1">
          <img src={yellow} alt="" />
        </div>
        <div className="img-2">
          <img src={kids} alt="kids" />
        </div>
        <div className="lines">
          <h2>DIVINE</h2>
          <h1>CARES</h1>
          <p className="purpose">
            The purpose of Divine Public School is to provide a quality
            education that prepares all of our students for success in college,
            career and life.We will produce scholarswho are high achieving
            critical thinkers, prepared to succeed in a constantly changing
            world and engaged in the improvement of their communities.
          </p>
        </div>
      </section>
    </>
  );
};

export default DivineCare;
