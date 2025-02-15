import React from "react";
import Template from "../assets/templateIcon.svg";
import Plugins from "../assets/pluginIcon.svg";
import Applications from "../assets/ApplicationIcon.svg";

const Market = () => {
  return (
    <div className="relative pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[10px] sm:px-[20px]">
        <div className="w-full max-w-[820px] text-center mx-auto">
          <h1 className="leading-[1] mb-6 sm:mb-10 text-[24px] sm:text-[34px] md:text-[46px] lg:text-[58px] font-[400]">
            Marketplace
          </h1>
          <p className="w-full max-w-[590px] mx-auto mb-[30px] sm:mb-[40px] text-[#9e9e9e] text-[16px] sm:text-[18px] md:text-[22px]">
            Browse the website templates and plugins for professional and
            personal projects, made by our community.
          </p>

          {/* Responsive Grid */}
          <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="cursor-pointer block bg-[#1f1f1f] text-left p-[20px] sm:p-[24px] rounded-[20px] sm:rounded-[24px] text-white hover:bg-[#2b2b2b] transition-all duration-200 ease-linear">
              <img
                src={Template}
                loading="lazy"
                className="block max-w-full w-[24px] mb-[14px] sm:mb-[18px]"
              />
              <h3 className="mb-[14px] sm:mb-[18px] text-[14px] sm:text-[16px] leading-[1.2] font-[400]">
                Templates
              </h3>
              <p className="text-[#9e9e9e] text-[12px] sm:text-[14px]">
                Build websites with templates.
              </p>
            </div>

            <div className="cursor-pointer block bg-[#1f1f1f] text-left p-[20px] sm:p-[24px] rounded-[20px] sm:rounded-[24px] text-white hover:bg-[#2b2b2b] transition-all duration-200 ease-linear">
              <img
                src={Plugins}
                loading="lazy"
                className="block max-w-full w-[24px] mb-[14px] sm:mb-[18px]"
              />
              <h3 className="mb-[14px] sm:mb-[18px] text-[14px] sm:text-[16px] leading-[1.2] font-[400]">
                Plugins
              </h3>
              <p className="text-[#9e9e9e] text-[12px] sm:text-[14px]">
                Add features with plugins.
              </p>
            </div>

            <div className="cursor-pointer block bg-[#1f1f1f] text-left p-[20px] sm:p-[24px] rounded-[20px] sm:rounded-[24px] text-white hover:bg-[#2b2b2b] transition-all duration-200 ease-linear">
              <img
                src={Applications}
                loading="lazy"
                className="block max-w-full w-[24px] mb-[14px] sm:mb-[18px]"
              />
              <h3 className="mb-[14px] sm:mb-[18px] text-[14px] sm:text-[16px] leading-[1.2] font-[400]">
                Applications
              </h3>
              <p className="text-[#9e9e9e] text-[12px] sm:text-[14px]">
                Use tools to manage your site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-gradient"></div>
    </div>
  );
};

export default Market;
