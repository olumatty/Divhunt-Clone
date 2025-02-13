import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="w-100 h-[1px] mt-[20px] mx-auto mb-[20px] max-w-[400px] border-bg"></div>
      <div className="cursor-pointer decoration-none text-white transition-hero">
        <div className="relative z-[10px]">
            <div className="flex gap-[40px] items-center justify-center">
                <div className="max-w-[100%]">
                    <div className="relative">
                    <img
                    src="https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-6 h-6 rounded-full  absolute top-0 left-4"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-6 h-6 rounded-full absolute top-0 left-8"
                  />
                    </div>
                </div>
                <span>Trusted by 20k+ users</span>

            </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
