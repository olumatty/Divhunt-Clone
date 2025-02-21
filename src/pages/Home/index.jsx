import React from 'react'
import Hero from '../../components/Hero'
import HeroSection from '../../components/HeroSection';
import Homfrastructure from '../../components/Homfrastructure';
import Resources from '../../components/Resources';
import HomeTrust from '../../components/HomeTrust';
import HomeCTA from '../../components/HomeCTA';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <HeroSection/>
      <Homfrastructure/>
      <Resources/>
      <HomeTrust/>
      <HomeCTA/>


    </div>
  )
}

export default Home;
