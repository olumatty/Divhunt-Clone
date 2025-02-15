import React from 'react'
import Hero from '../../components/Hero'
import HeroSection from '../../components/HeroSection';

const Home = () => {
  return (
    <div className='relative lg:z-30 pt-[80px]'>
      <Hero/>
      <HeroSection/>
    </div>
  )
}

export default Home;
