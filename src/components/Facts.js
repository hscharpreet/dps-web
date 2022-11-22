import React from "react";
import "./Fact.css";
import children from "../assets/children.jpeg";
const Facts = () => {
  return (
    <>
      <div className="facts">
        <div className="img-text">
          <img src={children} alt="children-img" />
          <div className="text">
            <h2>Everything You</h2>
            <h1>WANT</h1>
          </div>
          <div className="lines">
            <p>
              This environment is designed to bring out the best in who you are.
              Every interest you pursue, every talent you develop, and every
              experience you embrace can lead you to new and unexpected places.
              This exploration will bring you well beyond the boundaries of what
              you thought possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facts;
