import React from "react";
import Growths from "../assets/GrowthEnterprise.svg";
import BackgroundImage from "../assets/stripebg.svg"
const Growth = () => {
  return (
    <div className="relative pt-15 pb-[100px] lg:pb-[140px]">
      <div className="top-0 left-0 right-0 bottom-auto h-100 absolute mx-auto border-t border-t-[#242424] bg-gradient-to-t from-[#171717] to-[rgba(23,23,23,0.00)]"></div>
      <div className="relative z-10 w-full block max-w-[1400px] my-0 mx-auto px-5">
        <div>
          <div>
            <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[30px]">
              <img
                src={Growths}
                loading="lazy"
                alt="growth Icon"
                className="max-w-full"
              />
              <p className="text-[#a375ff] font-[500]">Growth</p>
            </div>
            <div className="mb-[60px] block">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-[60px] items-start sm:items-end justify-between">
                <div className="max-w-[654px] md:max-w-1/2 w-full">
                  <h2 className="text-left mb-0 text-[32px] sm:text-[42px] lg:text-[48px] text-balance lg:mb-4">
                    Focus on growth, we’ll handle the rest
                  </h2>
                </div>

                <div className="max-w-[400px] w-full lg:max-w-[430px]">
                  <p className="mb-0 lg:mb-6 text-[#9e9e9e]">
                    Let our team build or transfer your site to Divhunt while
                    you focus on growing your business. Enjoy unlimited
                    features, seamless scaling, and top-notch performance
                    without the hassle.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-y-[15px] sm:gap-x-[24px] items-start sm:items-center" hidden="true">
                        <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear"></div>
                        <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear"></div>
                  </div>
                </div>
              </div>
              <div className="border border-[#242424] py-[20px] px-[20px]">
                <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#242424] overflow-hidden relative rounded-[20px] p-[20px] bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
                >
                
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Growth;
