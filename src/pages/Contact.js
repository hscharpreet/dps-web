import React from "react";
import './Contact.css'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import ContactMap from "../components/Contact/ContactMap";
const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <ContactMap />
      <Footer/>
    </div>
  );
};

export default Contact;
