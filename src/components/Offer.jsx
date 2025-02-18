import React from "react";
import BackgroundImage from "../assets/stripebg.svg";
import Premium from "../assets/Premium.svg";
import PremiumImage from "../assets/PremiumImage.webp";
import Onboarding from "../assets/Onboarding.svg"
import OnboardingImage from "../assets/OnboardingImage.webp"
import Obb from "../assets/obb.svg"
import Blue from "../assets/blueobb.svg"
import Slack from "../assets/Slack.svg";
import SlackImage from "../assets/SlackImage.webp";
import Green from "../assets/slackobb.svg";
const Offer = () => {
  return (
    <div className="py-[60px] md:py-[100px] lg:pt-[80px] pb-[100px] relative">
      <div className="absolute top-0 left-0 right-0 bottom-auto h-[400px] form-bg mx-auto border-t border-t-[#242424]"></div>
      <div className="relative z-10 w-full block max-w-[1400px] my-0 mx-auto px-[20px]">
        <div>
          <div className="mb-[60px] ">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-y-[10px] md:gap-y-0 md:gap-x-[60px] md:justify-between">
              {/* Left Side */}
              <div className="max-w-full md:max-w-[50%] lg:max-w-[654px]">
                <h2 className="text-left text-[36px] md:text-[42px] lg:text-[42px]">
                  Web design made easy for everyone
                </h2>
              </div>

              {/* Right Side */}
              <div className="max-w-full md:max-w-[430px]">
                <p className="text-[#9e9e9e] mb-[24px] text-[18px]">
                  Use templates, build visually, and publish fast—no coding
                  needed.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-[#242424] py-[20px] px-[20px] mt-[30px] rounded-[20px]">
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#242424] overflow-hidden relative rounded-[20px] gap-y-[20px] md:gap-x-[20px] lg:gap-y-[30px] p-[20px] bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
              >
                <div className="gap-y-[40px] md:gap-y-[60px] border border-[#242424] flex overflow-hidden relative bg-[#070709] pt-[40px] rounded-[20px] flex-col justify-between">
                  <div className="px-[28px] relative z-10">
                    <div className="flex gap-x-[10px] items-center mb-[20px]">
                      <img src={Premium} alt="Premium" className="mb-[-4px]" />
                      <p className="text-[22px] mb-[-3px] font-[500]">
                        Premium Support
                      </p>
                    </div>
                    <p className="text-[#9e9e9e] text-[18px]">
                      Quickly solve any issues with our premium support,
                      ensuring your project progresses smoothly without any
                      hitches.
                    </p>
                  </div>
                  <img
                    src={PremiumImage}
                    alt="PremiumImage"
                    className="mx-auto relative z-10"
                  />
                <div className="top-auto left-0 right-0 bottom-0 absolute mx-auto">
                    <img src={Blue} alt="blur"/> 
                  </div>
                </div>

                <div className="gap-y-[40px] md:gap-y-[60px] border border-[#242424] flex overflow-hidden relative bg-[#070709] pt-[40px] rounded-[20px] flex-col justify-between">
                  <div className="px-[28px] relative z-10">
                    <div className="flex gap-x-[10px] items-center mb-[20px]">
                        <img src={Onboarding} alt="Premium" className="mb-[-4px]"/>
                        <p className="text-[22px] mb-[-3px] font-[500]">Onboarding</p>
                    </div>
                    <p className="text-[#9e9e9e] text-[18px]">
                        Master Divhunt with custom training from basics to expert. Onboard your team smoothly with focused sessions.
                         </p>
                  </div>
                  <img
                    src={OnboardingImage}
                    alt="PremiumImage"
                    className="mx-auto relative z-10"
                  />
                  <div className="top-auto left-0 right-0 bottom-0 absolute mx-auto">
                    <img src={Obb} alt="blur"/> 
                  </div>
                </div>

                <div className="gap-y-[40px] md:gap-y-[60px] border border-[#242424] flex overflow-hidden relative bg-[#070709] pt-[40px] rounded-[20px] flex-col justify-between">
                  <div className="px-[28px] relative z-10">
                    <div className="flex gap-x-[10px] items-center mb-[20px]">
                        <img src={Slack} alt="Premium" className="mb-[-4px]"/>
                        <p className="text-[22px] mb-[-3px] font-[500]">Slack channel</p>
                    </div>
                    <p className="text-[#9e9e9e] text-[18px]">
                    Access a private Slack channel for immediate support, enabling direct contact with our team for all needs.
                    </p>
                  </div>
                  <img
                    src={SlackImage}
                    alt="PremiumImage"
                    className="mx-auto relative z-10"
                  />
                  <div className="top-auto left-0 right-0 bottom-0 absolute mx-auto">
                    <img src={Green} alt="blur"/> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[60px] md:mt-[100px] h-[1px] w-full bg-[#242424]"></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
