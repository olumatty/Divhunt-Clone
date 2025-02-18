import React from 'react'
import Features1 from "../assets/Features1.svg"
import FeaturesImage from "../assets/FeaturesImage.webp"
import Features2 from "../assets/Features2.svg"
import FeaturesImage2 from "../assets/FeaturesImage2.webp"

const Features = () => {
  return (
    <div className='pb-[60px] md:pb-[80px] lg:pb-[100px]'>
        <div className='w-full max-w-[1400px] my-0 mx-auto px-auto'>
            <div className="px-0 lg:px-[60px]">
                <div className="mb-[60px]">
                    <div className="flex flex-col mb-[40px] md:mb-0 md:flex-row gap-6 md:gap-x-[60px] items-start md:items-end md:justify-between">
                        <div className="max-w-full md:max-w-[50%] lg:max-w-[654px]">
                            <h2 className="text-left text-[36px] md:text-[42px] lg:text-[48px] text-balance mb-[16px]">
                                Unlimited power and priority
                            </h2>
                        </div>
                        <div className="w-full max-w-[430px]">
                            <p className="text-[#9e9e9e] mb-6 text-[18px]">Unlock full-scale capabilities and priority support designed to empower your enterprise without any restrictions or limits.</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-y-0 lg:gap-x-[20px]'>
                    <div className="border border-[#242424] overflow-hidden bg-[rgba(36,36,36,0.40)] rounded-[20px]">
                        <div className="pt-[30px] px-[27px] pl-[27px] mb-[50px]">
                            <img src={Features1} alt="Logo" className='mb-[15px]'/>
                            <p className='mb-[10px] text-[22px] font-[500]'>All features, without limits</p>
                            <p className='text-[#9e9e9e] text-[18px] my-0'>Experience the ultimate freedom of limitless possibilities. Every feature is fully at your disposal, with absolutely no caps to hold you back.</p>
                        </div>
                        <img src={FeaturesImage} alt="image" className=''/>
                    </div>

                    <div className="border border-[#242424] overflow-hidden bg-[rgba(36,36,36,0.40)] rounded-[20px]">
                        <div className="pt-[30px] px-[27px] pl-[27px] mb-[50px]">
                            <img src={Features2} alt="Logo" className='mb-[15px]'/>
                            <p className='mb-[10px] text-[22px] font-[500]'>Features priority</p>
                            <p className='text-[#9e9e9e] text-[18px] my-0'>Your enterprise needs lead the way. We fast-track development of any essential feature you require, ensuring your operations stay ahead.</p>
                        </div>
                        <img src={FeaturesImage2} alt="image" className=''/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
