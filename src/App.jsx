import React from 'react'
import Header from './components/Header'
import Home from './pages/Home/index';
import Pricing from './pages/Pricing/index';
import MarketPlace from './pages/MarketPlace/index';
import Enterprise from './pages/Enterprise/index';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className='Main'> 
      <Header/>
       <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path ="/pricing" element={<Pricing/>}/>
        <Route path = "/marketplace" element={<MarketPlace/>}/>
        <Route path = "/enterprise" element = {<Enterprise/>}/>
       </Routes>
        <Footer/>
    </div>
  )
}

export default App
