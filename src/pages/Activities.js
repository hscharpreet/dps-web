import React from "react";
import "./Activities.css";
import { motion } from "framer-motion";
import Footer from "../components/Home/Footer";
import AboutPage from "../components/About/AboutPage";
import Gallery from "../components/Activities/Gallery";
import Navbar2 from "../components/Navbar2/Navbar2";
import VisitCard from "../components/Home/VisitCard";
import SlideUp from "../components/SlideUp";
const Activities = () => {
  return (
    <motion.div
      className="activities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <AboutPage />
      <Gallery />
      <SlideUp />
      <VisitCard />
      <Footer />{" "}
    </motion.div>
  );
};

export default Activities;
