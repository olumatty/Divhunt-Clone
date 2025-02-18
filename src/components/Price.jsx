import React from "react";

const Price = () => {
  return (
    <div className="pb-[60px] pt-[80px] md:pb-[100px]">
      <div className="w-full block max-w-[1400px] mx-auto px-[20px]">
        <div>
          <div className="w-full max-w-[650px] text-center mx-auto mb-[60px]">
            <span className="text-[#a375ff] font-[500]">Pricing</span>
            <h1 className="mt-[15px] leading-[1.4] font-[400] mb-[20px] text-[36px] md:text-[42px] lg:text-[46px]">
              The only platform where you can connect a custom domain even on a
              free plan
            </h1>
            <p className="w-full max-[410px] mx-auto text-[#9e9e9e] text-[18px] leading-[1.4]">Build & publish for free, get more with premium. <br/>Access all features for free. Pay only for usage limits.</p>
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="flex gap-y-[50px] bg-[rgba(36,36,36,0.6)] py-[30px] px-6 rounded-[20px] flex-col justify-between font-[16px] leading-[1.4]">
                <div className="">
                    <div className="border border-b border-[#242424] mb-4 pb-4">
                        <p className="mb-[10px] font-[500] text-[18px]">Free</p>
                    </div>
                </div>


                <div></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
