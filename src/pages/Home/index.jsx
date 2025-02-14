import React from 'react'
import Hero from '../../components/Hero'
import HeroSection from '../../components/HeroSection';

const Home = () => {
  return (
    <div className='relative z-30'>
      <Hero/>
      <HeroSection/>
    </div>
  )
}

export default Home;
