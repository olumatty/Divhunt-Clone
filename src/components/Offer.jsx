import React from "react";
import BackgroundImage from "../assets/stripebg.svg";

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
                        <div className="">

                        </div>

                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
