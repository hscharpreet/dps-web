import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/Ellipse 2.png";
const Navbar = () => {
  return (
    <motion.div className="nav"   initial={{ opacity: 0 }}  animate={{ opacity:1 }}  exit={{ opacity:0, transition:{duration:0.3} }}>
      <ul class="navigation">
        <Link to="/about" className="link">
          <li class="item">About</li>
        </Link>
        <Link to="/admission" className="link">
          <li class="item">Admission</li>
        </Link>
        <Link to="/information" className="link">
          <li class="item">Information</li>
        </Link>
        <Link to="/" className="link">
          <li class="item"> <img src={logo} alt="Logo" /></li>
        </Link>
        <Link to="/academics" className="link">
          <li class="item">Academics</li>
        </Link>
        <Link to="/activities" className="link">
          <li class="item">Activities</li>
        </Link>
        <Link to="/contact" className="link">
          <li class="item">Contact</li>
        </Link>
      </ul>
    </motion.div>
  );
};

export default Navbar;
