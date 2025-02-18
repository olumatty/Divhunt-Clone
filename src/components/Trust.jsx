import React from 'react'
import Trusts from "../assets/Trust.svg"
import Right_Arrow from "../assets/arrow-right.svg"
import Discord from "../assets/Discord.svg"
import Blue_Arrow from "../assets/blue.svg";
import BackgroundImage from "../assets/stripebg.svg";
import Image1 form "../assets/P"

const Trust = () => {
  return (
    <div className='py-[60px] md:py-[80px] lg:pt-[60px] lg:pb-[100px]'>
        <div className='w-full block max-w-[1400px] my-0 mx-auto px-[20px]'>
            <div>
                <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[30px]">
                    <img src={Trusts } alt='Trust' className='max-w-full'/>
                    <p>Trust</p>
                </div>
                <div className="flex gap-y-[20px] md:gap-y-0  lg:gap-x-[60px] items-start flex-col lg:justify-between">
                    <h2 className='text-[36px] md:text-[42px] lg:text-[48px] font-[400] leading-1.2'>People believe in Divhunt's power</h2>
                    <div className="w-full max-w-[490px]">
                        <p className="mb-6 text-[#9e9e9e] text-[18px]">
                        Discover why web designers and developers around the world rely on Divhunt to simplify their website building process and achieve remarkable results.
                        </p>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear">
                            <p>See all Divhunt reviews</p>
                            <img src={Right_Arrow} alt='arrow' className='transition-all duration-200 ease-in-out hover:translate-x-2'/>
                        </div>
                        <div className="flex text-[#5865F2] gap-x-[10px] tems-center cursor-pointer transition-all duration-200 ease-linear">
                            <img src={Discord} alt='discord' className='transition-all duration-200 ease-in-out hover:translate-x-2'/>
                            <p>Join our Discord</p>
                            <img src={Blue_Arrow} alt='arrow' className='transition-all duration-200 ease-in-out hover:translate-x-2'/>
                        </div>
                    </div>  
                </div>
                <div>
                    <div className="border border-[#242424] py-[20px] px-[20px] rounded-[20px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#242424] overflow-hidden relative rounded-[20px] gap-y-[20px] md:gap-x-[20px] lg:gap-y-[30px] p-[20px] bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${BackgroundImage})` }}>
                                <div className='border border-[#242424] flex bg-[#070709] transition-all duration-400 ease-in-out hover:bg-[#9e9e9e] px-[30px] flex-col justify-between py-[30px] rounded-[20px] cursor-pointer leading[1.4]'>
                                    <div className="flex items-start flex-col ">
                                        <p class="t882">Rebuilding our application with the Divhunt team was the best decision I've ever made. The team has a great ability to adapt to their clients, learning so much about our business and offering numerous ideas for improving our application. Now, the application is 10x better than it was before, and I won't even start on the speed—it's blazing fast!</p>
                                    </div>
                                    <div className='flex gap-y-[10px] mt-[40px] items-center'>
                                        <img src={} alt='' className=''/>

                                    </div>
                                </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Trust
