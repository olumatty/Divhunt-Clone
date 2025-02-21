import React from 'react'
import Infrastructure from "../assets/frastructure.svg"
import Right_Arrow from "../assets/arrow-right.svg"
import Fast from "../assets/Fast.svg";
import Globe from "../assets/globe.svg"
import Cache from "../assets/cache.svg"
import Building from "../assets/Building.svg"
import FrastructureImage from "../assets/FrastructureImage.svg"
import SPA from "../assets/Single.svg";
import CDN from "../assets/CDN.svg"
import Fludity from "../assets/Fludity.svg"
import Website from "../assets/Speed.svg"
import { motion } from "framer-motion";

const Homfrastructure = () => {
  return (
    <section className='pt-[40px] pb-[30px] md:pt-[60px] md:pb-[80px] lg:pt-[120px] lg:pb-[200px]'>
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
                        <div className=' grid grid-cols-2 gap-[60px] mt-[30px]'>
                            <div>
                                <div>
                                    <div className='flex flex-row gap-x-[5px] items-center gap-y-[15px] mb-[10px]'>
                                        <img src ={Fast} alt='icon' className='max-w-full'/>
                                        <h3 className='text-[14px]'>Fast indexing</h3>
                                    </div>
                                    <p className='text-[#9e9e9e] text-[12px]'>Impress clients with low crawl budget sites for quick SEO indexing.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='flex flex-row gap-x-[5px] items-center gap-y-[15px] mb-[10px]'>
                                        <img src ={Globe} alt='icon' className='max-w-full'/>
                                        <h3 className='text-[14px]'>Worldwide server locations</h3>
                                    </div>
                                    <p className='text-[#9e9e9e] text-[12px]'>Leverage Divhunt's global CDN for consistent, lightning-fast loading.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='flex flex-row gap-x-[5px] items-center gap-y-[15px] mb-[10px]'>
                                        <img src ={Cache} alt='icon' className='max-w-full'/>
                                        <h3 className='text-[14px]'>API Caching</h3>
                                    </div>
                                    <p className='text-[#9e9e9e] text-[12px]'>Boost site speed, reduce resource load & lower costs with API caching.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='flex flex-row gap-x-[5px] items-center gap-y-[15px] mb-[10px]'>
                                        <img src ={Building} alt='icon' className='max-w-full'/>
                                        <h3 className='text-[14px]'>Building performance</h3>
                                    </div>
                                    <p className='text-[#9e9e9e] text-[12px]'>Speed up website building with everything loading in a split second.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Right Hand*/}
            <div className='t279 lg:top-[86.5%]  lg:right-[-11%]'>
                <img src={FrastructureImage} alt='image' className='hidden lg:block border border-[#242424] rounded-[20px] max-w-full'/>
                <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                    
                    <div className='t281'>
                        <img src={SPA} className='mb-[24px] max-w-full' alt='icon'/>
                        <p className='mb-[10px] text-[16px] leading-[1.2]'>Single Page Application </p>
                        <p className='text-[#9e9e9e] text-[13px]'>SPA technology allows for fast websites, seamless navigation, and improved UX.</p>
                    </div>

                    <div className='t281'>
                        <img src={CDN} className='mb-[24px] max-w-full' alt='icon'/>
                        <p className='mb-[10px] text-[16px] leading-[1.2]'>Global CDN </p>
                        <p className='text-[#9e9e9e] text-[13px]'>We store your entire website on a global CDN for consistent, high-speed site performance, regardless of audience location.</p>
                    </div>

                    <div className='t281'>
                        <img src={Fludity} className='mb-[24px] max-w-full' alt='icon'/>
                        <p className='mb-[10px] text-[16px] leading-[1.2]'>Fludity </p>
                        <p className='text-[#9e9e9e] text-[13px]'>Instant loading and optimized RAM usage ensure smooth, lag-free performance websites on any device.</p>
                    </div>

                    <div className='t281'>
                        <img src={Website} className='mb-[24px] max-w-full' alt='icon'/>
                        <p className='mb-[10px] text-[16px] leading-[1.2]'>Website speed</p>
                        <p className='text-[#9e9e9e] text-[13px]'>Optimized code and lazy-loading ensure fast website performance without costly back-end development.</p>
                    </div>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Homfrastructure
