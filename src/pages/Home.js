import React from "react";
import "./Home.css";
import DivineCare from "../components/Home/DivineCare";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import Facts from "../components/Home/Facts";
import Activities from "../components/Home/Activities";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Header />
        <DivineCare />
        <Facts />
        <Activities />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;
