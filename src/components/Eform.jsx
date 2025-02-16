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
          <form className="w-full md:max-w-[680px]">
            <div className="flex gap-x-5 mb-2">
              <div className="w-full">
                <label className="text-[14px] mb-2 block">First name</label>
                <input
                  required
                  placeholder="John"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Last name</label>
                <input
                  required
                  placeholder="Doe"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
            </div>

            <div className="flex gap-x-5 mb-2">
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Business email</label>
                <input
                  required
                  placeholder="work@email.com"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Phone number</label>
                <input
                  required
                  placeholder="+"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
            </div>

            <div className="flex gap-x-5 mb-2">
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Company name</label>
                <input
                  required
                  placeholder="Your company name"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Company Size</label>
                <input
                  required
                  placeholder="200-500"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
            </div>

            <div className="flex gap-x-5 mb-2">
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Job title</label>
                <input
                  required
                  placeholder="Lead developer"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
              <div className="w-full">
                <label className="text-[14px] mb-2 block">Country</label>
                <input
                  required
                  placeholder="France"
                  className="bg-[#242424] block border border-black py-3 px-5 text-[12px] rounded-[10px] text-white outline-none w-full"
                />
              </div>
            </div>

            <div className="flex gap-x-5 mb-2">
              <div className="w-full">
                <label className="text-[14px] mb-2 block">How can we help your business?</label>
                <textarea name="comment" required="true" placeholder="Telll us more..." className="h-50 text-[12px] resize-none py-[10px] px-5 bg-[#242424] rounded-[10px] text-white block border border-black outline-none w-full"></textarea>
              </div>
            </div>
            <div className="relative w-full text-center rounded-[10px] py-3 px-6 font-[500] cursor-pointer overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#a375ff] to-[#5E2EBE] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.24)] transition-all duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0 opacity-0 bg-gradient-to-t from-[#5E2EBE] to-[#a375ff] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.24)] transition-all duration-300 group-hover:opacity-100"></div>
                <button type="submit" className="relative z-10 text-white">Contact Sales</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Eform;
