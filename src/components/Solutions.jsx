import React from "react";
import Solution from "../assets/Solution.svg";
import Right_Arrow from "../assets/arrow-right.svg";

const Solutions = () => {
  return (
    <div className="relative pb-[60px] md:pb-[100px] lg:pb-[200px]">
      <div className="relative z-10 w-full max-w-[1400px] my-0 mx-auto px-[20px]">
        <div className="flex lg:gap-x-[60px] align-items lg:justify-between gap-y-[80p] flex-col">
          <div className="w-full max-w-full lg:max-w-[480px]">
            <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[30px]]">
              <img src={Solution} alt="solution" className="max-w-full" />
              <p className="text-[#a375ff] font-[500]">Solutions</p>
            </div>
            <h2 className="mb-[16px] text-[36px] md:text-[42px] lg:text-[48px] font-[400] leading-[1.2]">
              We’ll build your website for you
            </h2>
          </div>
          <p className="mb-[30px] text-[#9e9e9e] text-[18px] my-0">
            Let our team handle every aspect of your project from start to
            finish. Enjoy personalized service, top-notch quality, and
            innovative solutions that meet all your requirements.
          </p>
          <div className="flex gap-x-[15px] items-center mb-[60px]">
            <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear text-white decoration-0">
              <p>Contact Sales</p>
              <img
                src={Right_Arrow}
                alt="Right Arrow"
                className="transition-all duration-200 ease-in-out hover:translate-x-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
