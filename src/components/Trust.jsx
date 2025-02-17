import React from 'react'
import Trust from "../assets/Trust.svg"

const Trust = () => {
  return (
    <div className='py-[60px] md:py-[80px] lg:pt-[60px] lg:pb-[100px]'>
        <div className='w-full block max-w-[1400px] my-0 mx-auto px-[20px]'>
            <div>
                <div className="flex items-center gap-y-2 text-[14px] text-[#a375ff] mb-[30px]">
                    <img src={Trust} alt='Trust' className='max-w-full'/>
                    <p>Trust</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Trust
