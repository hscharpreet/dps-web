import React from "react";
import "./Home.css";
import DivineCare from "../components/Home/DivineCare";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import Facts from "../components/Home/Facts";
import { motion } from "framer-motion";
import CardCarousel from "../components/Home/CardCarousel";
import Navbar from "../components/Home/Navbar";
import SlideUp from "../components/SlideUp";
import VisitCard from "../components/Home/VisitCard";
import DivineWelcome from "../components/Home/DivineWelcome";
import DivineImg from "../components/Home/DivineImg";

const Home = () => {
  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* <Navbar />
        <Header /> */}
        <DivineWelcome />
        <DivineCare />
        <DivineImg />
        <Facts />
        <Testimonials />
        <CardCarousel />
        <SlideUp />
        <VisitCard />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
