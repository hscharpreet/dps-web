import React from "react";
import "./Growth.css";
const Growth = () => {
  return (
    <div className="growthCard">
      <div className="growth g1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Flittlekids.jpg?alt=media&token=ff8e1b53-e9f4-4b4d-8c45-d2dcf0aad233"
          alt="growth"
        />
        <div className="growthContent">
          <h1>First Steps: 2-5 years</h1>
          <p>
            When a child steps through our doors we aim to take them on an
            exhilarating journey of learning, growth and discovery.
          </p>
        </div>
      </div>
      <div className="growth g2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Ffacts%20(1)%20(1).jpg?alt=media&token=45cad2b7-3643-4152-bfca-c066fefde5fc"
          alt="growth"
        />
        <div className="growthContent">
          <h1>Picking Up Pace: 5-7 years</h1>
          <p>
            Diviners are encouraged to be independent, critical thinkers with
            enquiring minds and a love of learning. Throughout, we emphasise the
            importance of kindness, respect and maintain high expectations of
            behaviour and good manners at all times.
          </p>
        </div>
      </div>
      <div className="growth g3">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2Fdivinecare_11zon.jpg?alt=media&token=5d929aba-88ea-401d-b7a1-bc1ca903fce0"
          alt="growth"
        />
        <div className="growthContent">
          <h1>Maintaining Momentum : 7-11 years</h1>
          <p>
            We offer our children many leadership and teamwork opportunities to
            build their confidence and prepare them for future challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Growth;
