import React from "react";
import "./PrincipalM.css";
import principlephoto from '../../assets/Group 10.png'
const PrinciplalM = () => {
  return (
    <div className="message">

    <h1 className="heading">PRINCIPAL'S MESSAGE</h1>
    <p className="parah">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrabled it to make a type specimen book. It has survived not onl five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.It was popularised in the 1960s .
      </p>
     
    <img className="principal-image" src={principlephoto} alt="" />
   
 

      
    </div>
  );
};

export default PrinciplalM;
