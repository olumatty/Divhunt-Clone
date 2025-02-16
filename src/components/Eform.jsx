import React from "react";
import Grow from "../assets/GrowEnterprise.svg";
import Arrow from "../assets/arrow-right.svg";

const Eform = () => {
  return (
    <div className="t1442">
      <div className="w-full max-w-[1400px] mx-auto px-5 mb-0">
        <div className="t1444 flex justify-between gap-x-14">
          <div className="max-w-[475px] md:max-w-full">
            <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-7">
              <img
                src={Grow}
                loading="lazy"
                alt="Grow"
                className="max-w-full"
              />
              <p className="font-medium my-0">Divhunt for enterprise</p>
            </div>
            <h1 className="text-[34px] md:text-[46px] lg:text-[58px] font-normal mt-0 leading-none mb-8 whitespace-pre-wrap">
              Grow your business to outer space
            </h1>
            <p className="text-[18px] md:text-[22px] max-w-[396px] mb-10 text-[#9e9e9e]">
              Join our enterprise program and gain access to specialized
              resources and expertise designed to drive your success.
            </p>
            <div className="flex gap-x-4 items-center">
              <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear text-white hover:gap-x-[14px]">
                <p className="whitespace-pre-wrap my-0">Explore benefits</p>
                <img
                  src={Arrow}
                  alt="Arrow"
                  loading="lazy"
                  className="transition-all duration-200 ease-in-out hover:translate-x-1"
                />
              </div>
            </div>
          </div>
          <form className=" w-full md:max-w-[680px] max-w-full">
            <div className="flex gap-x-[20px] mb-[10px]">
                <div className="w-full">
                    <label className="text-[14px] mb-[10px]">First name</label>
                    <input className="bg-[#242424] border border-black"
                </div>
                <div></div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Eform;
