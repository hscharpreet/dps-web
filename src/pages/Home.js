import React from "react";
import "./Home.css";
import DivineCare from "../components/Home/DivineCare";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import Facts from "../components/Home/Facts";
import Activities from "../components/Home/Activities";
import { motion } from "framer-motion";
import Card from "../components/Home/Card";
import CardCarousel from "../components/Home/CardCarousel";
import Navbar from "../components/Home/Navbar";
import TestimonialCarousel from "../components/Home/TestimonialCarousel";
import SlideUp from "../components/SlideUp";
import VisitCard from "../components/Home/VisitCard";
import DivineWelcome from "../components/About/DivineWelcome";
const Home = () => {
  return (
    <>
      <motion.div className="home" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
        <Navbar />
        <Header />
        <DivineWelcome/>
        <DivineCare />
        <Facts />
        <Activities />
        <Testimonials/>
        <CardCarousel/>
        <SlideUp/>
        <VisitCard/>
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
