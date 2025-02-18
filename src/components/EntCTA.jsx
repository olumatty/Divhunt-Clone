import React from "react";
import Video from "../assets/b0630152a46c04c2337983e02f60ffea_783172.mp4";

const EntCTA = () => {
  return (
    <div>
      <div className="lg:pt-[165px] pt-[60px] pb-[70px] relative overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-[20px]">
          <div className="flex lg:gap-x-[60px] items-start lg:items-center gap-y-[20px] lg:gap-y-0 flex-col lg:flex-row justify-between w-full">
            {/* Left Side */}
            <h2 className=" text-[42px] md:text-[46px] lg:text-[68px] text-balance">
              Build and publish websites for free
            </h2>

            {/* Right Side */}
            <div className="max-w-[453px]">
              <p className="mb-[30px] text-[18px]">
                Build and host your site with a custom domain for free. Upgrade
                anytime for expanded limits.
              </p>
              <div className="relative overflow-hidden inline-block px-6 py-3 rounded-[10px] bg-white text-[#070709] hover:bg-[#9e9e9e] font-medium cursor-pointer transition-all duration-200  no-underline">
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full opacity-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#9e9e9e_100%)] transition-all duration-300 ease-in-out mx-auto "></div>
                <p className="relative z-10 whitespace-break-spaces my-0 ">
                  Build for free
                </p>
              </div>
            </div>
          </div>
        </div>

        <video
          src={Video}
          loop
          muted
          autoPlay
          playsInline
          className="t3051 video "
        ></video>
      </div>
    </div>
  );
};

export default EntCTA;
