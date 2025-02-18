import React from "react";

const Hero = () => {
  return (
    <div className="pt-[60px] md:pt-[35px] bg-[#070709]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[20px] my-0">
        <div className="flex bg-[#070709] text-center items-center flex-col">
          <div className="flex items-center flex-col relative z-10">
            <div className="flex overflow-hidden relative py-[1px] px-[1px] rounded-[12px] mb-[30px] cursor-pointer transition-all duration-200 ease-linear">
              <div className="t3728">
                <div className='t3729'></div>
                <div className="t3730">
                  <div className="t3731"></div>
                </div>
              </div>
              <div className="t3726">
                <div className="t3727"></div>
              </div>
              <div className="border border-[#242424] block bg-[#070709] py-[5px] px-[5px] rounded-[10px] relative z-5">
                <div className="flex gap-x-[10px] flex-row items-center py-[6px] px-[6px] relative z-10">
                  <div className="bg-gradient-to-t from-[#5E2EBE] to-[#A375FF] shadow-inner shadow-[rgba(255,255,255,0.24)] py-1 px-[5px] rounded-[6px]">
                    <p className="text-[9px] font-[700] uppercase">New</p>
                  </div>
                  <p className="hidden md:block text-[#9e9e9e] text-[14px]">
                    Timeline-based interactions and Animations are here!
                  </p>
                  <p className="block md:hidden text-[#9e9e9e] text-[14px]">
                    Timeline-based interactions are here
                  </p>
                </div>
                <div className="t3712"></div>
              </div>
            </div>
            <div className='relative'>
              <h1 className='text-white flex items-center leading-[1.4] mb-4 flex-col justify-center text-[46px] md:text-[70px] lg:text-[80px]'>
                <span className="">
                  <span className="block text-center w-full leading-[1] ">
                    <span className='inline-block relative'>
                      <span className='inline-block translate-none rotate-none scale-none transform translate-0 blur-0 opacity-[1]'>
                        Build 
                      </span>
                      <span className="inline-block ml-3 translate-none rotate-none scale-none transform translate-0 blur-0 opacity-[1]"> websites.</span>
                    </span>
                  </span>
                </span>

                <span className="block text-center w-full leading-[1]">
                <span className='inline-block relative'>
                <span className='inline-block translate-none rotate-none scale-none transform translate-0 blur-0 opacity-[1]'>
                        Faster. 
                  </span>

                  <span className='inline-block translate-none rotate-none ml-3 scale-none transform translate-0 blur-0 opacity-[1]'>
                        Better.
                  </span>

                  <span className='inline-block translate-none rotate-none ml-3 scale-none transform translate-0 blur-0 opacity-[1]'>
                         Visually.
                  </span>
                  
                </span>

                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
