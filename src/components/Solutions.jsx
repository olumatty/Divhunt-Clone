import React from "react";
import { motion } from "framer-motion";
import Solution from "../assets/Solution.svg";
import Right_Arrow from "../assets/arrow-right.svg";
import Design from "../assets/Design.svg";
import Site from "../assets/Site.svg";
import SEO from "../assets/SEO.svg";
import Maintenance from "../assets/Maintenance.svg";
import Videos from "../assets/b0630152a46c04c2337983e02f60ffea_783172.mp4"

const Solutions = () => {
  return (
    <div className="relative pb-[60px] md:pb-[100px] lg:pb-[200px]">
      <div className="relative z-10 w-full max-w-[1400px] my-0 mx-auto px-[20px]">
        {/* Parent Flex Container */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[60px] items-center lg:justify-between gap-y-[80px]">
          {/* Left Side Content */}
          <div className="w-full lg:max-w-[480px]">
            <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[30px]">
              <img src={Solution} alt="solution" className="max-w-full" />
              <p className="text-[#a375ff] font-[500]">Solutions</p>
            </div>
            <h2 className="mb-[16px] text-[36px] md:text-[42px] lg:text-[48px] font-[400] leading-[1.2]">
              We’ll build your website for you
            </h2>
            <p className="mb-[30px] text-[#9e9e9e] text-[18px] my-0">
              Let our team handle every aspect of your project from start to
              finish. Enjoy personalized service, top-notch quality, and
              innovative solutions that meet all your requirements.
            </p>
            <div className="flex gap-x-[15px] items-center mb-[60px]">
              <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear text-white decoration-0">
                <p>Contact Sales</p>
                <img
                  src={Right_Arrow}
                  alt="Right Arrow"
                  className="transition-all duration-200 ease-in-out hover:translate-x-2 cursor-pointer"
                />
              </div>
            </div>
            <div className="grid gap-y-[60px] gap-x-[60px] grid-cols-2">
              <div>
                <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">
                  200%
                </p>
                <p className="text-[14px]">Faster project completion</p>
              </div>

              <div>
                <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">
                  50%
                </p>
                <p className="text-[14px]">Reduction in development costs</p>
              </div>

              <div>
                <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">
                  100%
                </p>
                <p className="text-[14px]">Custom solutions for your needs</p>
              </div>

              <div>
                <p className="text-[#a375ff] mb-[10px] text-[30px] lg:text-[32px]">
                  100%
                </p>
                <p className="text-[14px]">Scalable to meet enterprise needs</p>
              </div>
            </div>
          </div>
          {/* Right Side Comment Component */}
          <div className="w-full lg:max-w-[620px] lg:ml-auto grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]"
            >
              <img src={Design} className="mb-6" alt="Design" />
              <h3 className="mb-[10px] text-[16px] leading-[1.2] ">
                Design & build
              </h3>
              <p className="text-[14px] text-[#9e9e9e]">
                Get your site (re)designed and fully developed in Divhunt by our
                team.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]"
            >
              <img src={Site} className="mb-6" alt="Design" />
              <h3 className="mb-[10px] text-[16px] leading-[1.2] ">
                Site transfer
              </h3>
              <p className="text-[14px] text-[#9e9e9e]">
                We'll move your existing site to Divhunt, upgrading its design
                and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]"
            >
              <img src={SEO} className="mb-6" alt="Design" />
              <h3 className="mb-[10px] text-[16px] leading-[1.2] ">
                SEO & performance audit
              </h3>
              <p className="text-[14px] text-[#9e9e9e]">
                Get an SEO tune-up from us to make your site faster and more
                visible online.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#1f1f1f] py-6 px-6 rounded-[20px]"
            >
              <img src={Maintenance} className="mb-6" alt="Design" />
              <h3 className="mb-[10px] text-[16px] leading-[1.2] ">
                Ongoing maintenance
              </h3>
              <p className="text-[14px] text-[#9e9e9e]">
                Rely on us for ongoing updates and maintenance, keeping your
                site fresh.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <video src={Videos} loop muted autoPlay playsInline className="t1524 videoupside"></video>
    </div>
  );
};

export default Solutions;
