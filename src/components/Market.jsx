import React from "react";
import Template from "../assets/templateIcon.svg";
import Plugins from "../assets/pluginIcon.svg";
import Applications from "../assets/ApplicationIcon.svg";

const Market = () => {
  return (
    <div className="relative pt-[60px] pb-[60px]">
      <div className="relative z-10 w-[100%] block max-w-[1400px] mt-0 ml-auto mr-auto px-[20px] mb-0">
        <div className="w-[100%] max-w-[820px] text-center ml-auto mr-auto">
          <h1 className="leading-1 mb-10 text-[34px] md:text-[46px] lg:text-[58px] font-[400] mt-0 whitespace-break-spaces">
            Marketplace
          </h1>
          <p className="w-[100%] max-w-[590px] ml-auto mr-auto mb-[40px] text-[#9e9e9e] text-[18px] md:text-[22px] whitespace-break-spaces mt-0">
            Browse the website templates and plugins for professional and
            personal projects,made by our community
          </p>

          <div className="grid gap-[20px] grid-cols-3">
            <div className="cursor-pointer block bg-[#1f1f1f] text-left p-[24px] rounded-[24px] text-white hover:bg-[#2b2b2b] transition-all duration-[200ms] ease-linear">
              <img
                src={Template}
                loading="lazy"
                className="block max-w-[100%] w-[24px] mb-[18px]"
              />
              <h3 className="mb-[18px] text-[16px] leading-1.2 whitespace-break-spaces mt-0 font-[400]">
                Templates
              </h3>
              <p className="text-[#9e9e9e] text-[14px] whitespace-break-spaces">
                Build websites with templates.
              </p>
            </div>

            <div className="cursor-pointer block bg-[#1f1f1f] text-left p-[24px] rounded-[24px] text-white transition-all hover:bg-[#2b2b2b] duration-[200ms] ease-linear">
              <img
                src={Plugins}
                loading="lazy"
                className="block max-w-[100%] w-[24px] mb-[18px]"
              />
              <h3 className="mb-[18px] text-[16px] leading-1.2 whitespace-break-spaces mt-0 font-[400]">
                Plugins
              </h3>
              <p className="text-[#9e9e9e] text-[14px] whitespace-break-spaces">
                Add features with plugins.
              </p>
            </div>

            <div
              className="cursor-pointer block bg-[#1f1f1f] text-left p-[24px] rounded-[24px] 
             text-white transition-all duration-[200ms] ease-linea hover:bg-[#2b2b2b]"
            >
              <img
                src={Applications}
                loading="lazy"
                className="block max-w-[100%] w-[24px] mb-[18px]"
              />
              <h3 className="mb-[18px] text-[16px] leading-1.2 whitespace-break-spaces mt-0 font-[400]">
                Templates
              </h3>
              <p className="text-[#9e9e9e] text-[14px] whitespace-break-spaces">
                Use tools to manage your site.{" "}
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
