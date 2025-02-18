import React from "react";
import Infrastructure1 from "../assets/Infrastructure.svg"
import Arrow_right from "../assets/arrow-right.svg"
import Site from "../assets/Site.svg"
import Advance from "../assets/Design.svg" 
import Server from "../assets/server.svg"
import Uptime from "../assets/uptime.svg"
const Infrastructure = () => {
  return (
    <div className="relative pt-[100px] mb-[60px]">
      <div className="top-0 left-[50%] w-[1440px] h-[1240px] absolute transform -translate-x-1/2 mx-auto">
        <div className="top-0 left-[50%] w-[1440px] absolute transform -translate-x-1/2 mx-auto">
          <div className="border border-dashed border-[#D9D9D9] opacity-[0.1] bg-gradient-to-b from-[#242424] to-transparent py-[70px] px-[80px] rounded-[50%]">
            <div className="w-full border border-dashed border-[#D9D9D9] bg-gradient-to-b from-[#242424] to-transparent py-[70px] px-[80px] rounded-[50%]">
              <div className="w-full border border-dashed border-[#D9D9D9] bg-gradient-to-b from-[#242424] to-transparent h-full rounded-[50%]"></div>
            </div>
          </div>
        </div>
        <div className="top-0 left-0 right-0 bottom-0 absolute bg-gradient-to-b from-transparent to-[#070709] mx-auto"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-[20px]">
        <div className='flex flex-col lg:flex-row gap-y-[60px] lg:gap-y-0 max-w-[1240px] gap-x-[60px] mx-auto items-center justify-between'>
            <div className="max-w-full lg:max-w-[470px]">
                <div className='flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[30px]'>
                    <img src={Infrastructure1} alt="logo" className=""/>
                    <p>Infrastructure</p>
                </div>
                <h2 className='mb-4 text-[36px] md:text-[42px] lg:text-[48px] font-[400] leading-[1.2]'>Top-tier hosting & security</h2>
                <p className='mb-[30px] text-[#9e9e9e] text-[18px]'>Enjoy unparalleled hosting and security, ensuring your enterprise operates on a robust, secure foundation with zero compromises on performance or safety.</p>
                
                <div className='flex gap-x-[15px] items-center'>
                    <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear text-white">
                        <p>Contact Sales</p>
                        <img src={Arrow_right} alt="arrow" className="transition-all duration-200 ease-in-out hover:translate-x-2"/>
                    </div>
                </div>
            </div>


            <div className="max-w-full lg:max-w-[620px] grid gap-[20px] grid-cols-2">
                <div className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]">
                    <img src={Advance} alt="logo" className="mb-6"/>
                    <h3 className="mb-[10px] text-[16px] leading-[1.2]">Advanced DDoS protection</h3>
                    <p className='text-[#9e9e9e] text-[14px]'>Boost your site with advanced DDoS defense for superior, uninterrupted service at all times.</p>
                </div>

                <div className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]">
                    <img src={Site} alt="logo" className="mb-6"/>
                    <h3 className="mb-[10px] text-[16px] leading-[1.2]">Monitoring</h3>
                    <p className='text-[#9e9e9e] text-[14px]'>Our team constantly monitors your site, instantly alerting and responding to ensure optimal health & performance.</p>
                </div>

                <div className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]">
                    <img src={Server} alt="logo" className="mb-6"/>
                    <h3 className="mb-[10px] text-[16px] leading-[1.2]">Dedicated server</h3>
                    <p className='text-[#9e9e9e] text-[14px]'>Enjoy the luxury of a dedicated server in a custom location, offering exclusive resources for peak performance.</p>
                </div>

                <div className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]">
                    <img src={Uptime} alt="logo" className="mb-6"/>
                    <h3 className="mb-[10px] text-[16px] leading-[1.2]">99.9% uptime</h3>
                    <p className='text-[#9e9e9e] text-[14px]'>We guarantee 99.9% uptime, ensuring your website remains accessible to your audience without fail.</p>
                </div>

                <div className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]">
                    <img src={Advance} alt="logo" className="mb-6"/>
                    <h3 className="mb-[10px] text-[16px] leading-[1.2]">Unlimited bandwidth</h3>
                    <p className='text-[#9e9e9e] text-[14px]'>With unlimited bandwidth, experience freedom to handle massive traffic without slowing down or extra charges.</p>
                </div>

                <div className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]">
                    <img src={Advance} alt="logo" className="mb-6"/>
                    <h3 className="mb-[10px] text-[16px] leading-[1.2]">Global CDN acceleration</h3>
                    <p className='text-[#9e9e9e] text-[14px]'>Speed up your site globally with CDN acceleration, reducing load times and enhancing user experience worldwide.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
