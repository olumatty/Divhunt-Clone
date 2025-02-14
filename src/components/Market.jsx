import React from 'react'
import Template from "../assets/templateIcon.svg"
import Plugins from "../assets/pluginIcon.svg"
import Applications from "../assets/ApplicationIcon.svg"

const Market = () => {
  return (
    <div className='relative z-10 w-[100%] block max-w-[1400px] mt-0 ml-auto mr-auto px-[20px] mb-0'>
        <div className='w-[100%] max-w-[820px] text-center ml-auto mr-auto'>
            <h1 className='leading-1 mb-10 text-[34px] md:text-[46px] lg:text-[58px] font-[400] mt-0 whitespace-break-spaces'>MarketPlace</h1>
            <p className='w-[100%] max-w-[590px] ml-auto mr-auto mb-[40px] text-[#9e9e9e] text-[18px] md:text-[22px] whitespace-break-spaces mt-0'>
            Browse the website templates and plugins for professional and personal projects,made by our community</p>
        </div>

        <div className='grid gap-[20px] grid-cols-3'>
            <div className='cursor-pointer block bg-[#1f1f1f] align-left p-[24px] rounded-[24px] text-white transition-all duration-[200ms] ease-linear'>

            </div>

        </div>
      
    </div>
  )
}

export default Market
