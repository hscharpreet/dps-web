import React from "react";
import './Contact.css'
import { motion } from "framer-motion";
import Footer from '../components/Home/Footer'
import ContactMap from "../components/Contact/ContactMap";
import Navbar2 from "../components/Navbar2/Navbar2";
const Contact = () => {
  return (
    <motion.div className="contact" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
      <Navbar2 />
      <ContactMap />
      <Footer/>
    </motion.div>
  );
};

export default Contact;
