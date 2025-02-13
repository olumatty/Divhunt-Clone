import React from 'react'
import video from "../../assets/7f5e7754191cb457df33fb4e3ca7437e_75260.mp4"
import Image from "../../assets/major.PNG"

const MarketPlace = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#090909] via-[#2a1f3f] to-[#17082e] text-white text-center py-2">
        <p className="text-sm md:text-base font-light">
          Trusted by <span className="font-semibold">20k+ users</span> | Rated <span className="font-semibold">4.9</span> from <span className="font-semibold">260+</span> reviews
        </p>
      </div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={Image}
          alt="Overlay Content"
          className="w-3/4 md:w-1/2 lg:w-1/3"
        />
      </div>
    </div>
  );
};

export default MarketPlace
