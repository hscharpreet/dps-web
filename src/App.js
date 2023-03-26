
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
      <Route path="/dps-web" element={<Home/>}/>
      <Route path="/dps-web/about" element={<About/>}/>
      <Route path="/dps-web/about/teachers" element={<Teachers/>}/>
      <Route path="/dps-web/about/principal-message" element={<Readmore/>}/>
      {/* <Route path="/information" element={<Information/>}/> */}
      <Route path="/dps-web/admission" element={<Admission/>}/>
      <Route path="/dps-web/admission/fees" element={<Fees/>}/>
      <Route path="/dps-web/academics" element={<Academics/>}/>
      <Route path="/dps-web/activities" element={<Activities/>}/>
      <Route path="/dps-web/activities/:category" element={<ImageGallery/>}/>
      <Route path="/dps-web/contact" element={<Contact/>}/>
   </Routes>
   </AnimatePresence>
   </div>
    </>

  )
}

export default App;
