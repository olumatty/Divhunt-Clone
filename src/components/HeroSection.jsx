import React from "react";
import video from "../assets/7f5e7754191cb457df33fb4e3ca7437e_75260.mp4";
import Image from "../assets/293b415ad32296619bdb3c1cce31196b_100352.webp";

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative">
        <div className="overflow-hidden relative z-10 md:mt-0 lg:mt-30 inset-0 flex justify-center items-center">
          <img
            src={Image}
            alt="Overlay Content"
            className="w-[100%] md:w-[90%] max-w-[1240px] "
          />
        </div>
      </div>
      <div
        className="absolute top-[60%] md:top-[50%] z-3 mix-blend-color-dodge left-0 right-0 w-full h-[20%] inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/simple-abstract-background-pattern-art-work_733980-1781.jpg?ga=GA1.1.1107059902.1739532124&semt=ais_hybrid')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-main main-video video md:top[45%] top-[60%]"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
