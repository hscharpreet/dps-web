import React from "react";
import "./About.css";
import Footer from "../components/Home/Footer";
import PrinciplalM from "../components/About/PrinciplalM";
import Faculty from "../components/About/Faculty";
import { motion } from "framer-motion";
import Navbar2 from "../components/Navbar2/Navbar2";
import VisitCard from "../components/Home/VisitCard";
import Growth from "../components/About/Growth";
import Provide from "../components/About/Provide";
import SlideUp from "../components/SlideUp";
const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <PrinciplalM />
      <Growth/>
      <Provide/>
      <Faculty />
      <SlideUp/>
      <VisitCard/>
      <Footer />
    </motion.div>
  );
};

export default About;
