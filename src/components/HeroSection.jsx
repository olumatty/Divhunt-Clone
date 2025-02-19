import React from "react";

const HeroSection = () => {
  return (
    <section className="pb-[60px] lg:pb-[110px]">
      <div className="bg-gradient-to-t from-[#171717] to-[rgba(23,23,23,0)] pt-[100px] lg:pt-[225px] border-b border-[#242424] pb-[60px]">
        <div className='w-full max-w-[1400p] mx-auto px-[20px]'>
          <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-y-[20px] md:gap-y-[40px] lg:gap-x-[60px] lg:gap-y-0'>
            <h2 className='w-full text-balance text-[36px] md:text-[42px] lg:text-[48px] font-[400] leading-[1.2] mt-0'>
            Truly unlimited website builder with features that matter
            </h2>

            <p className='w-full max-w-[443px] text-[#9e9e9e] text-[18px]'>At Divhunt, we’re not just building features—we’re removing barriers so you can create anything, your way. If it can be coded, it can be built visually in Divhunt.</p>
          </div>
        </div>

      </div>



      <div></div>
      
    </section>
  );
};

export default HeroSection;
