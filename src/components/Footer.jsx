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
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer
