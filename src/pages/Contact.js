import React from "react";
import './Contact.css'
import { motion } from "framer-motion";
import Footer from '../components/Home/Footer'
import Navbar from "../components/Navbar/Navbar";
import ContactMap from "../components/Contact/ContactMap";
const Contact = () => {
  return (
    <motion.div className="contact" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
      <Navbar />
      <ContactMap />
      <Footer/>
    </motion.div>
  );
};

export default Contact;
