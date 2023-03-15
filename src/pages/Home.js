import React, { useEffect, useState } from "react";
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
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase.config";

const Home = () => {
  const [home, setHome] = useState([]);
  const fetchPost = async () => {
    const storageRef = doc(db, "/home/header/navbar/menu");
    onSnapshot(storageRef, (doc) => {
      // console.log(doc.data(), doc.id);
      const home = doc.data().name;
      console.log(home);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  // useEffect(() => {
  //   window.addEventListener('beforeunload', showPopupNotification);
  //   return () => {
  //     window.removeEventListener('beforeunload', showPopupNotification);
  //   };
  // }, []);

  // function showPopupNotification(e) {
  //   e.preventDefault();
  //   e.returnValue = '';
  //   alert('Are you sure you want to leave?');
  // }

  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar menu={home} />
        <Header />
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

// const q = collection(db, "/home/header/navbar/menu");

// const [docs, loading, error] = useCollectionData(q);
// console.log(docs);

//   const q = collection(db, "/home/header/navbar/menu");
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
