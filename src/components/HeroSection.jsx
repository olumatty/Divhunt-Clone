import React from "react";
import video from "../assets/7f5e7754191cb457df33fb4e3ca7437e_75260.mp4";
import Image from "../assets/293b415ad32296619bdb3c1cce31196b_100352.webp";

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="">
          <div className="main-video ">
            <div className="video">
              <video autoPlay loop muted className="video-main">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Background Overlay */}
        <div
          className="absolute top-[-100px] w-full h-[50%] inset-0  opacity-20"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/simple-abstract-background-pattern-art-work_733980-1781.jpg?ga=GA1.1.1107059902.1739532124&semt=ais_hybrid')",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
              backgroundPosition: "center"
          }}
        ></div>
      </div>

      {/* Overlay Image */}
      <div className="absolute z-10 mt-30 inset-0 flex justify-center items-center">
        <img
          src={Image}
          alt="Overlay Content"
          className="w-[100%] max-w-[1240px] "
        />
      </div>

      <div className="Section-text flex items-center justify-center w-full">
        <div className="flex gap-x-[100px] items-end space-between">
          <div className="w-[100%] max-w-[740px]">
            <h2 className="text-[48px] mt-[0px] font-normal leading-[1.2]">
              Truly unlimited website builder with features that matter
            </h2>
          </div>
          <div className="w-[100%] max-w-[445px] text-[#9e9e9e]">
            <p className="text-[18px]">
              At Divhunt, we’re not just building features—we’re removing
              barriers so you can create anything, your way. If it can be coded,
              it can be built visually in Divhunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
