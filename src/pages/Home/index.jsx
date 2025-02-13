import React from 'react'
import Hero from '../../components/Hero'
import HeroSection from '../../components/HeroSection';

const Home = () => {
  return (
    <div className='px-6 lg:px-20 relative z-30 py-6'>
      <Hero/>
      <HeroSection/>
    </div>
  )
}

export default Home;
