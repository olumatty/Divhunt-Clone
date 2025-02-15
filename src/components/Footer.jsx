import React from 'react'
import Logo from "../assets/DivhuntLogo.svg";
import Youtube from "../assets/youtubeicon.svg"
import Discord from "../assets/twitchicon.svg"
import X from "../assets/xicon.svg"
import Instagram from "../assets/instaicon.svg";
import Linkedln from "../assets/linkdinicon.svg"
import Facebook from "../assets/facebookicon.svg"

const Footer = () => {
  return (
    <div>
      <div className='py-[60px]'>
        <div className='w-full max-w-[1440px] mx-auto my-0 px-[20px]'>
          <div className='flex justify-between gap-x-[60px] md:max-lg:flex-col md:max-lg:gap-y-[60px]'>
            {/*Left HandSide */}
            <div>
              <div className='flex gap-x-[15px] items-center mb-[30px]'>
                <img src ={Logo} alt="Logo" className='max-w-full overflow-clip'/>
                <p className="text-[14px] whitespace-break-spaces my-0">Divhunt - Build websites. Faster. Better. Visually.</p>
              </div>
              {/* Icons */}
              <div className='flex gap-[17px] items-center '>
                <div className="cursor-pointer transition-all duration-200 ease-linear text-white">
                  <img src={Youtube} alt='Youtube Logo' className='max-w-full'/>
                </div>

                <div className="cursor-pointer transition-all duration-200 ease-linear text-white">
                  <img src={Discord} alt='Discord Logo' className='max-w-full'/>
                </div>

                <div className="cursor-pointer transition-all duration-200 ease-linear text-white">
                  <img src={X} alt='X Logo' className='max-w-full'/>
                </div>

                <div className="cursor-pointer transition-all duration-200 ease-linear text-white">
                  <img src={Instagram} alt='Instagram Logo' className='max-w-full'/>
                </div>

                <div className="cursor-pointer transition-all duration-200 ease-linear text-white">
                  <img src={Linkedln} alt='Linkedln Logo' className='max-w-full'/>
                </div>

                <div className="cursor-pointer transition-all duration-200 ease-linear text-white">
                  <img src={Facebook} alt='Facebook Logo' className='max-w-full'/>
                </div>
              </div>
            </div>
            {/*Left HandSide */}
            <div className='flex justify-between gap-x-[60px] md:max-lg:justify-between md:max-md:gap-x-[40px] sm:max-md:grid sm:max-md:grid-cols-2 sm:max-md:gap-y-[40px]'>
              <div className='flex gap-x-[15px] flex-col gap-y-2'>
                <p className='text-[14px] font-[500] whitespace-break-spaces my-0'>Features</p>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Builder</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>CMS</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>SEO</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>REST API</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Plugins</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Localization</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Interactions</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Custom Files</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Infrastructure</span>
              </div>

              <div className='flex gap-x-[15px] flex-col gap-y-2'>
                <p className='text-[14px] font-[500] whitespace-break-spaces my-0'>Solutions</p>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Builder</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>For Designer</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>For Developers</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>For Agencies</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>For Individuals</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>For Enterprise</span>
              
              </div>

              <div className='flex gap-x-[15px] flex-col gap-y-2'>
                <p className='text-[14px] font-[500] whitespace-break-spaces my-0'>Compare</p>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>WordPress</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Webflow</span>
              </div>

              <div className='flex gap-x-[15px] flex-col gap-y-2'>
                <p className='text-[14px] font-[500] whitespace-break-spaces my-0'>Company</p>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Forum</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Pricing</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Community</span>
              </div>

              <div className='flex gap-x-[15px] flex-col gap-y-2'>
                <p className='text-[14px] font-[500] whitespace-break-spaces my-0'>Legal</p>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Privacy Policy</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Terms of Service</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Data Processing <br/>Addendum</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Acceptable Use</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Cookie Policy</span>
              </div>

              <div className='flex gap-x-[15px] flex-col gap-y-2'>
                <p className='text-[14px] font-[500] whitespace-break-spaces my-0'>Resources</p>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>MarketPlace</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Updates </span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Academy</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Case Studied</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Testmonials</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Youtube</span>
                <span className='text-[#9e9e9e] text-[14px] cursor-pointer transition-all duration-200 ease-linear hover:text-white'>Forum</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
