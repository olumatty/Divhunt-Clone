import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="text-white text-center py-6 px-6">
        {/* Top Badge */}
        <div className="flex justify-center text-center mb-4">
          <div className="card-wrapper h-[48px] w-[372px] overflow-hidden">
            <div className="..."></div>
            <div className="card-content bg-[#242424] flex items-center justify-center gap-3 text-xs">
              <div className="items-center text-center bg-[#242424] border border-gray-700 px-4 py-2 rounded-xl gap-3 shadow-md cursor-pointer">
                <span
                  className="bg-gradient-to-b from-[#A375FF] to-[#5E2EBE] shadow-inner text-white rounded-[6px] text-[9px] px-[5px] py-[4px] uppercase font-bold"
                  style={{
                    boxShadow:
                      "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.24)",
                  }}
                >
                  New
                </span>
                <span className="text-[#9e9e9e] text-center text-sm ml-3">
                  Timeline-based Interactions and Animations are here!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-[80px] font-bold leading-tight">
          Build websites.
          <br />
          <span className="text-white">Faster.</span>{" "}
          <span className="text-white">Better.</span>{" "}
          <span className="text-white">Visually.</span>
        </h1>

        <div className="flex  flex-col lg:flex-row  justify-center w-[100%] min-w-[380px] align-items space-x-8">
          <p className="text-[#9e9e9e] items-center lg:text-left text-[22px] mt-4">
            Experience a visual website builder
            <br /> with limitless customization capabilities.
          </p>

          {/* CTA Button */}
          <div className="mt-8 items-center">
            <button
              className="bg-gradient-to-b from-[#A375FF] to-[#5E2EBE] shadow-inner text-[16px] text-white font-semibold px-6 py-3 rounded-lg"
              style={{
                boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.24)",
              }}
            >
              Build for free
            </button>
          </div>
        </div>
        <div className="relative w-100 h-[1px] mt-[20px] mx-auto mb-[20px] max-w-[400px] border-bg"></div>
        <div className="cursor-pointer decoration-none text-white transition-hero">
          <div className="relative z-[10px">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex gap-[30px] items-center  ">
                <div className="max-w-[100%]">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-8 h-8 border-[#070709] border-4 rounded-full"
                    />
                    <img
                      src="https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-8 h-8 rounded-full border-[#070709] border-4  absolute top-0 left-4"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-8 h-8 rounded-full border-[#070709] border-4  absolute top-0 left-8"
                    />
                  </div>
                </div>
                <span className="text-[#9e9e9e]">Trusted by 20k+ users</span>
              </div>
              <div className="w-[1px] h-[12px] line-bg"></div>
              <span className="text-[#9e9e9e]">
                Rated 4.9 from 260+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
