import React from 'react'
import Trusts from "../assets/Trust.svg"
import Right_Arrow from "../assets/arrow-right.svg"
import Discord from "../assets/Discord.svg"
import Blue_Arrow from "../assets/"

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
                            <img src={Right_Arrow} alt='arrow' className='transition-all duration-200 ease-in-out hover:translate-x-2'/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Trust
