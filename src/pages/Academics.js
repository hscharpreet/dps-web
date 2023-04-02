import React from "react";
import Footer from "../components/Home/Footer";
import { motion } from "framer-motion";
import Navbar2 from "../components/Navbar2/Navbar2";
import Academics1 from "../components/Academics/Academics1";
import VisitCard from "../components/Home/VisitCard";
import Additional from "../components/Academics/Additional";
import SlideUp from "../components/SlideUp";
const Academics = () => {
  return (
    <motion.div
      className="academics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <Academics1 />
      <Additional />
      <SlideUp />
      <VisitCard />
      <Footer />
    </motion.div>
  );
};

export default Academics;
