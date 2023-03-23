import React from "react";
import "./ContactMap.css";
import SimpleMap from "./CMap";
const Contact = () => {
  return (
    <>
      <div className="contactMap">
        <div className="contactHeading">
          <h1>Get in touch with Divine School</h1>
          <h2>You can contact us via any of the methods below:</h2>
          <h3>Address:</h3>
          <p>
            {" "}
            Satyanganj, Ahraura, Mirzapur, <br />
            Uttar Pradesh <br />
          </p>
          <h3>Phone:</h3>
          <p>8318909165</p>
          <h3>Email:</h3> <p>divineschool@gmail.com</p>
          <p>
            The Headteacher can be contacted by email at:
            pinkigupta234@gmail.com
          </p>
        </div>
        <div className="map">
          <SimpleMap />
        </div>
      </div>
    </>
  );
};

export default Contact;
