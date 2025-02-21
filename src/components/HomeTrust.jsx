import React from "react";
import Trusts from "../assets/Trust.svg";
import Right_Arrow from "../assets/arrow-right.svg";
import Discord from "../assets/Discord.svg";
import Blue_Arrow from "../assets/blue.svg";
import BackgroundImage from "../assets/stripebg.svg";
import Image1 from "../assets/PERSON 3.jpg";
import Image2 from "../assets/PERSON 4.jpg";
import Image3 from "../assets/PERSON 5.jpg";

const HomeTrust = () => {
  return (
    <div className="pb-[20px] md:pb-[80px] lg:pb-[140px]">
          <div className="w-full block max-w-[1400px] my-0 mx-auto px-[20px]">
            <div>
              <div className="flex items-center gap-x-2 text-[14px] text-[#a375ff] mb-[30px]">
                <img src={Trusts} alt="Trust" className="max-w-full" />
                <p>Trust</p>
              </div>
              <div className="flex gap-y-[20px] md:gap-y-0  lg:gap-x-[60px] items-start flex-col lg:flex-row lg:justify-between">
                <h2 className="text-[36px] md:text-[42px] w-full max-w-[450px] lg:text-[48px] font-[400] leading-1.2">
                  People believe in Divhunt's power
                </h2>
                <div className="w-full max-w-[490px]">
                  <p className="mb-6 text-[#9e9e9e] text-[18px]">
                    Discover why web designers and developers around the world rely
                    on Divhunt to simplify their website building process and
                    achieve remarkable results.
                  </p>
                  <div className="flex gap-x-6 items-center">
                    <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear">
                      <p>See all Divhunt reviews</p>
                      <img
                        src={Right_Arrow}
                        alt="arrow"
                        className="transition-all duration-200 ease-in-out hover:translate-x-2"
                      />
                    </div>
                    <div className="flex text-[#5865F2] gap-x-[10px] tems-center cursor-pointer transition-all duration-200 ease-linear">
                      <img
                        src={Discord}
                        alt="discord"
                        className="transition-all duration-200 ease-in-out hover:translate-x-2"
                      />
                      <p>Join our Discord</p>
                      <img
                        src={Blue_Arrow}
                        alt="arrow"
                        className="transition-all duration-200 ease-in-out hover:translate-x-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border border-[#242424] py-[20px] px-[20px] mt-[30px] rounded-[20px]">
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#242424] overflow-hidden relative rounded-[20px] gap-y-[20px] md:gap-x-[20px] lg:gap-y-[30px] p-[20px] bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                  >
                    <div className="border border-[#242424] flex bg-[#070709] transition-all duration-400 ease-in-out hover:bg-[#2b2b2b] px-[30px] flex-col justify-between py-[30px] rounded-[20px] cursor-pointer leading[1.4]">
                      <div className="flex items-start flex-col ">
                        <p class="t882">
                          Rebuilding our application with the Divhunt team was the
                          best decision I've ever made. The team has a great ability
                          to adapt to their clients, learning so much about our
                          business and offering numerous ideas for improving our
                          application. Now, the application is 10x better than it
                          was before, and I won't even start on the speed—it's
                          blazing fast!
                        </p>
                      </div>
                      <div className="flex gap-x-[10px] mt-[40px] items-center text-[16px] leading-[1.4]">
                        <img
                          src={Image1}
                          alt="image 1"
                          className="w-[30px] h-[30px] min-w-[30px] rounded-[6px] object-fit"
                        />
                        <div className="text-[#9e9e9e]">
                          <p>John Dominic</p>
                          <p>Founder of reelTech Operators</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="border border-[#242424] flex bg-[#070709] transition-all duration-400 ease-in-out hover:bg-[#2b2b2b] px-[30px] flex-col justify-between py-[30px] rounded-[20px] cursor-pointer leading[1.4]">
                      <div className="flex items-start flex-col ">
                        <p class="t882">
                          We we're a Webflow only agency, by switching to Divhunt we
                          we're able to DOUBLE our revenue! Their CMS is INSANELY
                          good, probably the only one on the market that can compete
                          with Wordpress, i agree that you need to be a developer in
                          order to understand it fully, but once you do, man... it's
                          insane. And i really mean it.
                        </p>
                      </div>
                      <div className="flex gap-x-[10px] mt-[40px] items-center text-[16px] leading-[1.4]">
                        <img
                          src={Image2}
                          alt="image 1"
                          className="w-[30px] h-[30px] min-w-[30px] rounded-[6px] object-fit"
                        />
                        <div className="text-[#9e9e9e]">
                          <p>Anita Dominic</p>
                          <p>Founder of PenTech Operators</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="border border-[#242424] flex bg-[#070709] transition-all duration-400 ease-in-out hover:bg-[#2b2b2b] px-[30px] flex-col justify-between py-[30px] rounded-[20px] cursor-pointer leading[1.4]">
                      <div className="flex items-start flex-col ">
                        <p class="t882">
                          <p class="t882">
                            After 15 years of hard work behind the scenes creating
                            websites, I now know that I don't want to worry about
                            updates, backups etc. I want to be able to build sites
                            and be more of a creator that the team can trust. I
                            don't want to manage a team of people, I want them to
                            manage themselves and I can just create. That's why the
                            SaaS application and cloud CMS is a great solution.
                          </p>
                        </p>
                      </div>
                      <div className="flex gap-x-[10px] mt-[40px] items-center text-[16px] leading-[1.4]">
                        <img
                          src={Image3}
                          alt="image 1"
                          className="w-[30px] h-[30px] min-w-[30px] rounded-[6px] object-fit"
                        />
                        <div className="text-[#9e9e9e]">
                          <p>John Nick</p>
                          <p>Founder of reelTechly Estate</p>
                        </div>
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

export default HomeTrust
