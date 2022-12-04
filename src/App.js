
import React from 'react'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';
import { Routes, Route, useLocation } from 'react-router-dom';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import ImageGallery from './components/Activities/ImageGallery';
import {AnimatePresence} from 'framer-motion'
const App = () => {
  const location = useLocation();
  return (
    <>
    <div className="app">
    <AnimatePresence>
      <Routes location = {location} key ={ location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/information" element={<Information/>}/>
      <Route path="/admission" element={<Admission/>}/>
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
