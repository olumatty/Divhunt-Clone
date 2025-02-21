import React from "react";
import Resource from "../assets/Resources.svg";
import Resources1 from "../assets/Resource1.webp"
const Resources = () => {
  return (
    <div className="pt-[40px] pb-[320px] md:pt-[80px] md:pb-[100px] relative lg:pt-[60px] lg:pb-[260px]">
      <div className="top-0 left-0 bottom-auto right-0 absolute h-[400px] bg-gradient-to-t from-[#171717] to-transparent mx-auto border border-[#242424]"></div>
      <div className="z-10 relative w-full max-[1400px] my-0 mx-auto px-[20px]">
        <div>
          <div className="flex items-center gap-y-[8px] text-[14px] text-[#a375ff] mb-[30px] ">
            <img src={Resource} alt="" className="max-w-full" />
            <p>Resources</p>
          </div>
          <div className="mb-[60px]">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
              {/* Left Side */}
              <div className="max-w-full md:max-w-[50%] lg:max-w-[654px]">
                <h2 className="text-left text-[36px] md:text-[40px] lg:text-[46px] text-balance mb-[16px]">
                  Get started with the best website builder
                </h2>
              </div>

              {/* Right Side */}
              <div className="w-full max-w-[450px]">
                <p className="text-[#9e9e9e] text-[16px]">
                  Start building websites in Divhunt quickly and easily. Explore
                  resources, find help, and dive into your projects.
                </p>
              </div>
            </div>
            <div className ='grid grid-cols-2 md:grid-cols-2 lg: grid-col-3 gap-y-[30px] gap-x-[20px]'>
                <a className='overflow-hidden bg-[#242424] rounded-[20px] cursor-pointer tansition-all duration-200 ease-linear'>
                    <div className="overflow-hidden relative">

                    </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
