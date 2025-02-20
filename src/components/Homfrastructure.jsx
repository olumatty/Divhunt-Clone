import React from 'react'
import Infrastructure from "../assets/frastructure.svg"
import Right_Arrow from "../assets/arrow-right.svg"
import Fast from "../assets/Fast.svg";
import Globe from "../assets/globe.svg"
import Cache from "../assets/cache.svg"
import Building from "../assets/Building.svg"

const Homfrastructure = () => {
  return (
    <section className='pt-[40px] md:pt-[60px] md:pb-[80px] lg:pt-[150px] lg:pb-[250px]'>
        <div className='w-full max-w-[1400px] my-0 mx-auto px-[20px]'>
            <div className='gap-y-[60px] md:gap-y-[100px] flex-col flex lg:flex-row relative'>
                <div className='max-w-full w-full flex gap-y-[100px] lg:max-w-[505px] flex-col'>
                    <div>
                        <div className="flex items-center gap-x-[8px] text-[14px] text-[#a375ff] mb-[30px]">
                            <img src={Infrastructure} alt='icon' className='max-w-full'/>
                            <p>Infrastructure</p>
                        </div>
                        <div>
                            <div>
                                <div className='mb-[30px] max-w-full'>
                                    <h2 className='text-left text-[32px] md:text-[42px] lg:text-[44px] mb-[16px] text-balance'>
                                    Fast, easy website building and browsing
                                    </h2>
                                    <p className='text-[#9e9e9e] text-[16px] my-0'>From freelancers to agencies, Divhunt is the best website builder for coders and no-coders alike - with visual drag-and-drop plus built-in customization options for projects of any size.</p>
                                </div>
                                <div className='flex gap-x-[15px] items-center'>
                                    <div className='flex gap-x-[15px] items-center'>
                                        <a className='flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear decoration-0'>
                                            <p className=''>See all Website Builder features</p>
                                            <img src={Right_Arrow} alt='icon' className='transition-all duration-200 ease-in-out hover:translate-x-2'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' grid grid-cols-2 gap-[60px]'>
                            <div>
                                <div>
                                    <div className='flex flex-row gap-x-[5px] items-center gap-y-[15px] mb-[10px]'>
                                        <img src ={Fast} alt='icon' className='max-w-full'/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homfrastructure
