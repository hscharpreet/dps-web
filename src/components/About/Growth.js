import React from "react";
import './Growth.css'
const Growth = () => {
  return (
    <div className="growthCard">
      <div className="growth g1">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider3.jpg?alt=media&token=b3396ffe-784b-44bb-b0b2-354ac2d39b67" alt="" />
        <div className="growthContent">
          <h1>First Steps: 2-5 years</h1>
          <p>
            When a child steps through our doors we aim to take them on an
            exhilarating journey of learning, growth and discovery.
          </p>
        </div>
      </div>
      <div className="growth g2">
      <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FDSCN0174%20(1).jpg?alt=media&token=90948ec4-e7d5-4bd7-8fc9-86dab40cee9b" alt="" />
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
      <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fslider.jpg?alt=media&token=0cbed583-bf6d-4b5c-ae1c-619d3e0f785b" alt="" />
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
