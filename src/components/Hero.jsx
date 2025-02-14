import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="text-white text-center py-6 px-6 w-full">
        {/* Top Badge */}
        <a className="t3725">
          <div className="t3728">
            <div className="t3729"></div>
            <div className="t3730">
              <div className="t3731"></div>
            </div>
          </div>
          <div>
            <div className="t3726">
              <div className="t3727"></div>
            </div>
          </div>

          <div className="t3711 zindex-5">
            <div className="t3732">
              <div className="New">
                <span className="text-[9px] font-[900] uppercase">New</span>
              </div>
              <p className="large text-gray text-14px">
                Timeline-based Interactions and Animation is here!
              </p>
              <p className="small hidden text-gray text-14px">
                Timeline-based Interaction is here!
              </p>
            </div>
          </div>
        </a>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-[80px] font-bold leading-tight">
          Build websites.
          <br />
          <span className="text-white">Faster.</span>{" "}
          <span className="text-white">Better.</span>{" "}
          <span className="text-white">Visually.</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center w-full min-w-[380px] space-x-8">
          <p className="text-[#9e9e9e] lg:text-left text-[22px] mt-4">
            Experience a visual website builder
            <br /> with limitless customization capabilities.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
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

        <div className="relative w-full h-[1px] mt-[20px] mx-auto mb-[20px] max-w-[400px] border-gray-700"></div>

        <div className="cursor-pointer text-white transition-hero">
          <div className="relative z-[10]">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex gap-[30px] items-center">
                <div className="max-w-full">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-8 h-8 border-[#070709] border-4 rounded-full"
                    />
                    <img
                      src="https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-8 h-8 rounded-full border-[#070709] border-4 absolute top-0 left-4"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-8 h-8 rounded-full border-[#070709] border-4 absolute top-0 left-8"
                    />
                  </div>
                </div>
                <span className="text-[#9e9e9e]">Trusted by 20k+ users</span>
              </div>
              <div className="w-[1px] h-[12px] bg-gray-700"></div>
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
