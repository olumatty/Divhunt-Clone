import React from "react";
import Video from "../assets/b0630152a46c04c2337983e02f60ffea_783172.mp4"

const MarketCTA = () => {
  return (
    <div>
      <div className="lg:pt-[110px] pt-[60px] pb-[60px] relative overflow-hidden">
        <div className="relative z-10 w-[100%] max-w-[1400px] my-0 mx-auto px-[20px]">
          <div className="flex text-center items-center flex-col">
            <h2 className="width-[100%] max-w-[710px] mb-[20px] text-[42px] font-[400] md:text-[46px] lg:text-[60px] text-balance whitespace-break-spaces leading-[1.2]">
              Create and sell your templates and plugins
            </h2>
            <div className="max-w-[453px]">
              <div className="orelative overflow-hidden inline-block px-6 py-3 rounded-[10px] bg-white text-[#070709] hover:bg-[#9e9e9e] font-medium cursor-pointer transition-all duration-200  no-underline">
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full opacity-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#9e9e9e_100%)] transition-all duration-300 ease-in-out mx-auto "></div>
                <p className="relative z-10 whitespace-break-spaces my-0 ">
                  Start Creating
                </p>
              </div>
            </div>
          </div>
        </div>
        <video src={Video} loop muted autoPlay playsInline className="t3051 video "></video>

        
      </div>
    </div>
  );
};

export default MarketCTA;
