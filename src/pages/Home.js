import React from 'react'
import './Home.css'
import DivineCare from '../components/DivineCare';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials';
import Facts from '../components/Facts';
import Activities from '../components/Activities';

const Home = () => {
  return (
    <>
    <div className="home">
        <Navbar/>
        <Header/>
        <DivineCare/>
        <Facts/>
        <Activities/>
        <Testimonials/>
        <Footer/>
        </div>
    </>
  )
}

export default Home