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
                    boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.24)",
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
    </section>
    
    </div>
    
  );
};

export default Hero;
