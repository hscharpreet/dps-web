import React from "react";
import "./About.css";
import Footer from "../components/Home/Footer";
import AboutPage from "../components/About/AboutPage";
import DivineWelcome from "../components/About/DivineWelcome";
import PrinciplalM from "../components/About/PrinciplalM";
import Faculty from "../components/About/Faculty";
import { motion } from "framer-motion";
import Navbar2 from "../components/Navbar2/Navbar2";
import VisitCard from "../components/Home/VisitCard";
const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <AboutPage />
      <DivineWelcome />
      <PrinciplalM />
      <Faculty />
      <VisitCard/>
      <Footer />
    </motion.div>
  );
};

export default About;
