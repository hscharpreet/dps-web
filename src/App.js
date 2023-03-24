
import React from 'react'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
// import Information from './pages/Information';
import { Routes, Route, useLocation } from 'react-router-dom';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Fees from './components/Admisssion/Fees';
import ImageGallery from './components/Activities/ImageGallery';
import {AnimatePresence} from 'framer-motion'
import Teachers from './components/About/Teachers';
import Readmore from './components/About/Readmore';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  const location = useLocation();
  return (
    <>
    <div className="app">
    <AnimatePresence>
    <ScrollToTop/>
      <Routes location = {location} key ={ location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/dps-web" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about/teachers" element={<Teachers/>}/>
      <Route path="/about/principal-message" element={<Readmore/>}/>
      {/* <Route path="/information" element={<Information/>}/> */}
      <Route path="/admission" element={<Admission/>}/>
      <Route path="/admission/fees" element={<Fees/>}/>
      <Route path="/academics" element={<Academics/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/activities/images" element={<ImageGallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </AnimatePresence>
   </div>
    </>

  )
}

export default App;
