import React from "react";
import './Growth.css'
const Growth = () => {
  return (
    <div className="growthCard">
      <div className="growth g1">
        <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
        <div className="growthContent">
          <h1>First Steps: 2-5 years</h1>
          <p>
            When a child steps through our doors we aim to take them on an
            exhilarating journey of learning, growth and discovery.
          </p>
        </div>
      </div>
      <div className="growth g2">
      <img src="https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
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
      <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
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
