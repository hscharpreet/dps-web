import React from "react";
import './Contact.css'
import { motion } from "framer-motion";
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import ContactMap from "../components/Contact/ContactMap";
const Contact = () => {
  return (
    <motion.div className="contact" initial={{ width: 0 }}  animate={{ width: "100%" }}  exit={{ x:window.innerWidth, transition:{duration:0.3} }}>
      <Navbar />
      <ContactMap />
      <Footer/>
    </motion.div>
  );
};

export default Contact;
