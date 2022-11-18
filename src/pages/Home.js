import React from 'react'
import './Home.css'
import DivineCare from '../components/DivineCare';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
    <div className="home">
        <Navbar/>
        <Header/>
        <DivineCare/>
        <Testimonials/>
        <Footer/>
        </div>
    </>
  )
}

export default Home