import React from "react";
import Growths from "../assets/GrowthEnterprise.svg";
import BackgroundImage from "../assets/stripebg.svg";
import Performance from "../assets/GrowthIcon1.svg";
import Limitations from "../assets/GrowthIcon2.svg";
import Scale from "../assets/GrowthIcon3.svg";
import dotted from "../assets/dotted.svg";
const Growth = () => {
  return (
    <div className="relative pt-15 pb-[100px] lg:pb-[120px]">
      <div className="absolute top-0 left-0 right-0 bottom-auto h-[400px] form-bg mx-auto border-t border-t-[#242424]"></div>
      <div className="relative z-10 w-full block max-w-[1400px] my-0 mx-auto px-5">
        <div>
          <div>
            <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[40px]">
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
              <div className="max-w-[654px] md:w-1/2 w-full">
                <h2 className="text-left mb-0 text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.2] text-balance">
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
                  <div
                    className="flex flex-col sm:flex-row gap-y-[15px] sm:gap-x-[24px] items-start sm:items-center"
                    hidden="true"
                  >
                    <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear"></div>
                    <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear"></div>
                  </div>
                </div>
              </div>
              <div className="border border-[#242424] py-[20px] px-[20px] relative rounded-[20px] mt-[30px]">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#242424] overflow-hidden relative rounded-[20px] gap-y-[20px] md:gap-x-[20px] lg:gap-y-[30px] p-[20px] bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${BackgroundImage})` }}
                > 
                  <div className="gap-y-[40px] lg:gap-0 border overflow-hidden border-[#242424] bg-[#070709] py-[40px] px-[30px] rounded-[20px]">
                    <div className="z-10 relative">
                      <div className="flex gap-x-[10px] items-center mb-[20px]">
                        <img
                          src={Performance}
                          alt="performance"
                          loading="lazy"
                          className="max-w-full"
                        />
                        <p className="text-[22px] font-[500] my-0">
                          Get first-class performance
                        </p>
                      </div>
                      <p className="text-[#9e9e9e] text-[18px]">Get a team of professionals to build or transfer your site on Divhunt so you can focus on growing your business.</p>
                    </div>
                  </div>

                  <div className="gap-y-[40px] lg:gap-0 border overflow-hidden border-[#242424] bg-[#070709] py-[40px] px-[30px] rounded-[20px] ">
                    <div className="z-10 relative">
                      <div className="flex gap-x-[10px] items-center mb-[20px]">
                        <img
                          src={Limitations}
                          alt="performanc"
                          className="max-w-full"
                        />
                        <p className="text-[22px] font-[500] my-0">
                        Create without limitations
                        </p>
                      </div>
                      <p className="text-[#9e9e9e] text-[18px]">Experience limitless business solutions: unlimited pages, CMS items, submissions, and beyond—no restrictions at all.</p>
                    </div>
                  </div>

                  <div className="gap-y-[40px] lg:gap-0 border overflow-hidden border-[#242424] bg-[#070709] py-[40px] px-[30px] rounded-[20px]">
                    <div className="z-10 relative">
                      <div className="flex gap-x-[10px] items-center mb-[20px]">
                        <img
                          src={Scale}
                          alt="performance"
                          className="max-w-full"
                        />
                        <p className="text-[22px] font-[500] my-0">
                        Scale infinitely
                        </p>
                      </div>
                      <p className="text-[#9e9e9e] text-[18px]">Scale your site infinitely with business growth, ensuring instant load times, smooth experiences, no complex setups.</p>
                    </div>
                  </div>
                  <div className="grid gap-y-[60px] gap-x-[60px] grid-cols-2">
                    <div>
                        <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">200%</p>
                        <p className="text-[14px]">Faster project completion</p>
                    </div>

                    <div>
                        <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">50%</p>
                        <p className="text-[14px]">Reduction in development costs</p>
                    </div>

                    <div>
                        <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">100%</p>
                        <p className="text-[14px]">Custom solutions for your needsn</p>
                    </div>

                    <div>
                        <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">100%</p>
                        <p className="text-[14px]">Scalable to meet enterprise needs</p>
                    </div>
                  </div>
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
