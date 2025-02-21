import React from "react";
import Resource from "../assets/Resources.svg";
import Resources1 from "../assets/Resource1.webp";
import RightArrow from "../assets/arrow-right.svg";
import Resources2 from "../assets/Resources2.webp";
import Resources3 from "../assets/Resources3.webp";
const Resources = () => {
  return (
    <div className="pt-[40px]  md:pt-[80px] md:pb-[100px] relative lg:pt-[60px] lg:pb-[220px]">
      <div className="top-0 left-0 bottom-auto right-0 absolute h-[400px] bg-gradient-to-t from-[#171717] to-transparent mx-auto border border-[#242424]"></div>
      <div className="z-10 relative w-full max-[1400px] my-0 mx-auto px-[20px]">
        <div>
          <div className="flex items-center gap-y-[8px] text-[14px] text-[#a375ff] mb-[30px] ">
            <img src={Resource} alt="" className="max-w-full" />
            <p>Resources</p>
          </div>
          <div className="mb-[60px]">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
              {/* Left Side */}
              <div className="max-w-full md:max-w-[50%] lg:max-w-[654px]">
                <h2 className="text-left text-[36px] md:text-[40px] lg:text-[46px] text-balance mb-[16px]">
                  Get started with the best website builder
                </h2>
              </div>

              {/* Right Side */}
              <div className="w-full max-w-[450px]">
                <p className="text-[#9e9e9e] text-[16px]">
                  Start building websites in Divhunt quickly and easily. Explore
                  resources, find help, and dive into your projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] gap-x-[20px] mt-[20px]">
              <div className="overflow-hidden bg-[#242424] rounded-[20px] cursor-pointer tansition-all duration-200 ease-linear group">
                <div className="overflow-hidden relative">
                  <img
                    src={Resources1}
                    className="transition-all durration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="top-auto left-0 right-0 bottom-0 h-[50px] absolute bg-gradient-to-b from-[#24242400] to-[var(--Grey-Bg)] mx-auto"></div>
                </div>
                <div className="flex items-end pt-[40px] px-[30px] pb-[24px] justify-between">
                  <div className="w-full max-w-[254px]">
                    <h3 className="leading-[1] mb-[10px]">Crash course</h3>
                    <p className="text-[#9e9e9e] text-[16px]">
                      New to Divhunt? Learn the basics of the best website
                      builder around.
                    </p>
                  </div>
                  <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[10px] border border-[rgba(158,158,158,0.2)] transition-all duration-300 ease-in-out group-hover:bg-[#9e9e9e]">
                    <img src={RightArrow} alt="icon" className="max-w-full" />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden bg-[#242424] rounded-[20px] cursor-pointer tansition-all duration-200 ease-linear group">
                <div className="overflow-hidden relative">
                  <img
                    src={Resources2}
                    className="transition-all durration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="top-auto left-0 right-0 bottom-0 h-[50px] absolute bg-gradient-to-b from-[#24242400] to-[var(--Grey-Bg)] mx-auto"></div>
                </div>
                <div className="flex items-end pt-[40px] px-[30px] pb-[24px] justify-between">
                  <div className="w-full max-w-[254px]">
                    <h3 className="leading-[1] mb-[10px]">Academy</h3>
                    <p className="text-[#9e9e9e] text-[16px]">
                      Find tutorials on Divhunt features and elevate your web development.
                    </p>
                  </div>
                  <div cldivssName="flex w-[40px] h-[40px] justify-center items-center rounded-[10px] border border-[rgba(158,158,158,0.2)] transition-all duration-300 ease-in-out group-hover:bg-[#9e9e9e]">
                    <img src={RightArrow} alt="icon" className="max-w-full" />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden bg-[#242424] rounded-[20px] cursor-pointer tansition-all duration-200 ease-linear group">
                <div className="overflow-hidden relative">
                  <img
                    src={Resources3}
                    className="transition-all durration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="top-auto left-0 right-0 bottom-0 h-[50px] absolute bg-gradient-to-b from-[#24242400] to-[var(--Grey-Bg)] mx-auto"></div>
                </div>
                <div className="flex items-end pt-[40px] px-[30px] pb-[24px] justify-between">
                  <div className="w-full max-w-[254px]">
                    <h3 className="leading-[1] mb-[10px]">Community</h3>
                    <p className="text-[#9e9e9e] text-[16px]">
                      Got stuck? Ask the Divhunt community. We are all here for you!
                    </p>
                  </div>
                  <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[10px] border border-[rgba(158,158,158,0.2)] transition-all duration-300 ease-in-out group-hover:bg-[#9e9e9e]">
                    <img src={RightArrow} alt="icon" className="max-w-full" />
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

export default Resources;
