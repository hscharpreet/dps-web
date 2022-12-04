import React from "react";
import "./Home.css";
import DivineCare from "../components/Home/DivineCare";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import Facts from "../components/Home/Facts";
import Activities from "../components/Home/Activities";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <motion.div className="home" initial={{ width: 0 }}  animate={{ width: "100%" }}  exit={{ x:window.innerWidth, transition:{duration:0.3} }}>
        <Navbar />
        <Header />
        <DivineCare />
        <Facts />
        <Activities />
        <Testimonials />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
