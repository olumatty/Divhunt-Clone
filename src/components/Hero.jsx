import React from "react";
import Imaggess from "../assets/imagess.webp";
import Image from "../assets/293b415ad32296619bdb3c1cce31196b_100352.webp";
import { CiPlay1 } from "react-icons/ci";
import dotted from "../assets/dotimage.webp";
import Video from "../assets/b0630152a46c04c2337983e02f60ffea_783172.mp4";

const Hero = () => {
  return (
    <div className="pt-[80px] md:pt-[80px] bg-[#070709]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[20px] my-0">
        <div className="flex bg-[#070709] text-center items-center flex-col">
          <div className="flex items-center flex-col relative z-10">
            <div className="flex overflow-hidden relative py-[1px] px-[1px] rounded-[12px] mb-[30px] cursor-pointer transition-all duration-200 ease-linear">
              <div className="t3728">
                <div className="t3729"></div>
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

            <div className="relative">
              <h1 className="text-white flex items-center leading-[1.4] mb-4 flex-col justify-center text-[46px] md:text-[70px] lg:text-[80px]">
                <span className="">
                  <span className="block text-center w-full leading-[1] ">
                    <span className="inline-block relative">
                      <span className="inline-block translate-none rotate-none scale-none transform translate-0 blur-0 opacity-[1]">
                        Build
                      </span>
                      <span className="inline-block ml-3 translate-none rotate-none scale-none transform translate-0 blur-0 opacity-[1]">
                        {" "}
                        websites.
                      </span>
                    </span>
                  </span>
                </span>

                <span className="block text-center w-full leading-[1]">
                  <span className="inline-block relative">
                    <span className="inline-block translate-none rotate-none scale-none transform translate-0 blur-0 opacity-[1]">
                      Faster.
                    </span>

                    <span className="inline-block translate-none rotate-none ml-3 scale-none transform translate-0 blur-0 opacity-[1]">
                      Better.
                    </span>

                    <span className="inline-block translate-none rotate-none ml-3 scale-none transform translate-0 blur-0 opacity-[1]">
                      Visually.
                    </span>
                  </span>
                </span>
              </h1>
            </div>
            <div className="mb-[60px]">
              <div className="flex gap-x-[48px] justify-between flex-col md:flex-row text-[16px] font-[400] leading-[1.4]">
                <p className="text-[#9e9e9e] w-full max-w-[480px] text-center mb-[20px] md:text-left md:mb-0 text-[22px] font-[400] leading-[1.4]">
                  Experience a visual website builder with limitless
                  customization capabilities.
                </p>
                <div className="flex gap-x-[20px] items-center justify-center">
                  <div
                    className=" rounded-[10px] py-3 px-6 font-[500] inline-block relative overflow-hidden cursor-pointer
                     transition-all duration-200 ease-linear text-white "
                  >
                    <div>
                      <div className="btn"></div>
                      <div className="btn-bg"></div>
                      <p className="z-10 relative">Build for free</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] max-w-[400px] bg-gradient-to-r from-[#ffffff00] via-[rgba(255,255,255,0.12)] to-[#ffffff00] my-[20px] mx-auto"></div>
              <div className="flex gap-x-[10px] items-center justify-center relative z-10 cursor-pointer transition-all duration-200 ease-linear">
                <div className="flex cursor-pointer">
                  <img src={Imaggess} alt="" className="h-[30px] max-w-full" />
                </div>
                <p className="text-[#9e9e9e] text-[14px]">
                  Trusted by 20k+ users
                </p>
                <div className="h-[12px] w-[1px] bg-[rgba(255,255,255,0.2)]"></div>
                <p className="text-[#9e9e9e] text-[14px]">
                  Rated 4.9 from 260+ reviews
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="z-10 overflow-hidden relative">
              <img
                src={Image}
                loading="eager"
                alt="Image"
                className="hidden lg:block w-full max-w-[1240px] relative z-10"
              />
              <div className="lg:hidden relative">
                <img
                  src={Image}
                  loading="eager"
                  alt="Image"
                  className=" w-full max-w-[1240px] relative z-10"
                />
                <div className="top-[50%] left-0 right-0 w-[146px] bottom-auto flex z-55 absolute transform translate-x-0 -translate-y-1/2 bg-[rgba(7,7,9,0.8)] gap-y-3 items-center mx-auto py-[15px] px-[20px] rounded-[100px]">
                  <CiPlay1 className="text-white" />
                  <p className=" text-[14px]">Watch video</p>
                </div>
              </div>
              <div className="t439" style={{ top: "254.8px", left: "576px" }}>
                <div className="t442">
                  <CiPlay1 className="text-white max-w-full" />
                  <p className=" text-[14px]">Watch video</p>
                </div>
              </div>
            </div>
            <img
              src={dotted}
              alt=""
              className="top-[-35%] h-[60%] left-0 right-0 bottom-auto z-[4] absolute mx-auto mix-blend-color-dodge"
            />
            <video
              src={Video}
              muted
              loop
              autoPlay
              playsInline
              className="hidden md:block absolute top-[-30%] left-0 right-0 w-full bottom-auto z-[2] mx-auto mix-blend-lighten rotate-180"
            />
             <video
              src={Video}
              muted
              loop
              autoPlay
              playsInline
              className="block md:hidden absolute top-[-30%] left-0 right-0 w-full bottom-auto z-[2] mx-auto mix-blend-lighten rotate-180"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
