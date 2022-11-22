import React from 'react'
import "./Button.css";
import { Link } from 'react-router-dom';
const Button = () => {
  return (
    <div className="button" id="button-1" >
    <div id="slide"></div>
    <Link to="/admission" className='link'>Admission</Link>
  </div>
  )
}


export default Button;