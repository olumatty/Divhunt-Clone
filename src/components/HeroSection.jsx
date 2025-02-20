import React from "react";
import Arrow_Right from "../assets/arrow-right.svg";
import Canvas from "../assets/canvas.svg";
import Collaboration from "../assets/collaboration.svg";
import CustomBreak from "../assets/Custom.svg";
import Customcss from "../assets/customcss.svg";
import Builder from "../assets/Builder.webp";
import Greenbg from "../assets/bg image.webp";
import playbutton from "../assets/9d4ab70489800dd4071af1d7a3f2d23a_979.svg";
import Right_Arrow from "../assets/arrow-right.svg";
import Coloredbg from "../assets/coloredbg.webp";
import Composebg from "../assets/composebg.webp" ;
import Fields from "../assets/field.svg";
import Multi from "../assets/multi.svg";
import Repeater from "../assets/Repeater.svg";
import Unlimited from "../assets/limit.svg";

const HeroSection = () => {
  return (
    <section className="pb-[60px] lg:pb-[110px]">
      <div className="bg-gradient-to-t from-[#171717] to-[rgba(23,23,23,0)] pt-[100px] lg:pt-[225px] border-b border-[#242424] pb-[60px]">
        <div className="w-full max-w-[1400p] mx-auto px-[20px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-y-[20px] md:gap-y-[40px] lg:gap-x-[60px] lg:gap-y-0">
            <h2 className="w-full text-balance text-[36px] md:text-[42px] lg:text-[48px] font-[400] leading-[1.2] mt-0">
              Truly unlimited website builder with features that matter
            </h2>

            <p className="w-full max-w-[443px] text-[#9e9e9e] text-[18px]">
              At Divhunt, we’re not just building features—we’re removing
              barriers so you can create anything, your way. If it can be coded,
              it can be built visually in Divhunt.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[100px]">
        <div className="w-full max-w-[1400px] my-0 mx-auto px-[20px]">
          <div className="flex gap-y-[60px] lg:gap-y-0 flex-col lg:flex-row lg:gap-x-[20px] lg:items-start">
            <div className="hidden lg:flex flex-[1_1_0%] sticky">
              <div className="flex gap-y-[15px] flex-col">
                <p className="text-[18px] font-[500]">Features</p>
                <a
                  href="#hp-builder"
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear"
                >
                  <p>Builder</p>
                </a>

                <a
                  href="#hp-cms"
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear text-[#9e9e9e]"
                >
                  <p>CMS</p>
                </a>

                <a
                  href="#hp-plugins"
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear text-[#9e9e9e]"
                >
                  <p>Plugins</p>
                </a>

                <a
                  href="#hp-seo"
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear text-[#9e9e9e]"
                >
                  <p>SEO</p>
                </a>

                <a
                  href="#hp-restapo"
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear text-[#9e9e9e]"
                >
                  <p>REST API</p>
                </a>

                <a
                  href="#hp-loacalization"
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear text-[#9e9e9e]"
                >
                  <p>Localization</p>
                </a>

                <a
                  href="#hp-customfiles "
                  link-type="anchor"
                  className="scroll-mt-[60px] flex gap-x-[6px] items-center cursor-pointer transition-all duration-200 ease-linear text-[#9e9e9e]"
                >
                  <p>Custom files</p>
                </a>
              </div>
            </div>
            {/*Right hand side */}
            <div className="flex max-w-[1130px] w-full flex-col gap-y-[80px] md:gap-y-[100px] lg:gap-y-[120px]">
              <div id="builder" className="">
                <h2 className="text-[36px] md:text-[42px] lg:text-[48px] mb-[30px] font-[400] leading-[1.2]">
                  Visuals Builder
                </h2>
                <div className="Card-animation">
                  <div className="flex bg-[#242424] gap-y-[40px] md:gap-y-[60px] lg:gap-y-0 p-[20px] lg:p-[30px] rounded-[20px] lg:flex-row lg:gap-x-[70px] flex-col-reverse">
                    <div className="w-full max-w-full lg:max-w-[500px] gap-y-[60px] flex flex-col  justify-between">
                      <div className="">
                        <div>
                          <div className="max-w-full mb-[30px]">
                            <h3 className="text-left text-[30px] md:text-[32px] mb-[8px] lg:mb-[20px] text-balance">
                              Develop concepts into reality with robust visual
                              tools
                            </h3>
                            <p className="text-[16px] text-[#9e9e9e]">
                              Experience our next-gen web builder that blends
                              code-based customizations with visual freedom.
                            </p>
                          </div>
                          <div className="flex gap-x-[15px] lg:mt-[20px] items-center">
                            <div className="flex gap-x-[15px] items-center">
                              <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear">
                                <p> See all builder features</p>
                                <img
                                  src={Arrow_Right}
                                  alt="arrow"
                                  className="max-w-full transition-all duration-200 ease-in-out cursor-pointer hover:translate-x-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-x-[30px] mt-[60px] grid-cols-2">
                          <div>
                            <div className="flex gap-y-[15px] items-start mb-[10px] flex-col">
                              <img
                                src={Canvas}
                                alt="icon"
                                className="max-w-full"
                              />
                              <p className="text-[14px] my-0">
                                Freeform canvas
                              </p>
                            </div>
                            <p className="text-[#9e9e9e] text-[12px]">
                              Navigate, zoom, and pin multiple pages on a
                              freeform canvas.
                            </p>
                          </div>

                          <div>
                            <div className="flex gap-y-[15px] items-start mb-[10px] flex-col">
                              <img
                                src={Collaboration}
                                alt="icon"
                                className="max-w-full"
                              />
                              <p className="text-[14px] my-0">Collaboration</p>
                            </div>
                            <p className="text-[#9e9e9e] text-[12px]">
                              Develop and collaborate with your team in
                              real-time - all on one page.
                            </p>
                          </div>

                          <div>
                            <div className="flex gap-y-[15px] mt-[30px] items-start mb-[10px] flex-col">
                              <img
                                src={CustomBreak}
                                alt="icon"
                                className="max-w-full"
                              />
                              <p className="text-[14px] my-0">
                                Custom breakpoints
                              </p>
                            </div>
                            <p className="text-[#9e9e9e] text-[12px]">
                              Design with full control over responsive
                              breakpoints.
                            </p>
                          </div>

                          <div>
                            <div className="flex gap-y-[15px] mt-[30px] items-start mb-[10px] flex-col">
                              <img
                                src={Customcss}
                                alt="icon"
                                className="max-w-full"
                              />
                              <p className="text-[14px] my-0">Custom CSS</p>
                            </div>
                            <p className="text-[#9e9e9e] text-[12px] leading-[1.4]">
                              Advance styling with custom CSS, in-builder
                              editing, & state targeting.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="overflow-hidden relative pt-[30px] pr-[30px] bg-cover bg-no-repeat rounded-[10px] md:rounded-[20px]"
                      style={{ backgroundImage: `url(${Greenbg})` }}
                    >
                      <img
                        src={Builder}
                        alt="image"
                        className="rounded-tr-[10px] w-full max-w-full"
                      />

                      <div
                        className="top[-1%] left-[1%] right-[-1%] bottom-[-1%] flex opacity-0 gap-y-[5px] absolute bg-[rgba(7, 7, 9, 0.1)] transition-all duration-400
                           ease-in-out translate-x-2 items-center mx-auto flex-col backdrop-blur-[50px] justify-center "
                      >
                        <div className="flex gap-y-[5px] flex-col">
                          <a
                            href="#"
                            className="flex gap-x-[10px] items-center py-[17px] px-[20px] justify-center rounded-[100px] bg-[rgba(255, 255, 255, 0.15)] transition-all duration-250 ease-in-out"
                          >
                            <img src={playbutton} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="CMS" className="">
                <h2 className="text-[36px] md:text-[42px] lg:text-[48px] mb-[30px] font-[400] leading-[1.2]">
                  Composable CMS
                </h2>
                <div className="card-animation">
                  <div className="flex flex-col mb-[30px] bg-[#242424] p-[20px] md:p-[30px] rounded-[20px] relative overflow-hidden">
                    {/* Main Content */}
                    <div className="flex w-full flex-col md:flex-row justify-between items-center md:items-start gap-6">
                      {/* Left Side: Heading */}
                      <div className="w-full md:w-1/2 lg:w-[50%]">
                        <h3 className="text-left text-[30px] md:text-[32px] mb-2 whitespace-pre-wrap">
                          One content management system (CMS) for all your needs
                        </h3>
                      </div>

                      {/* Right Side: Paragraph */}
                      <div className="w-full md:w-1/2 lg:w-[50%] max-w-[430px]">
                        <p className="text-[16px] mb-[24px] text-[#9e9e9e] whitespace-pre-wrap">
                          Create, organize, and manage your dynamic content with
                          the maximum freedom and flexibility of our visual CMS.
                        </p>
                        <div className="flex gap-x-[24px] items-center">
                          <div className="flex gap-x-[10px] items-center cursor-pointer transition-all duration-200 ease-linear text-white">
                            <p className="whitespace-pre-wrap">
                              See all CMS features
                            </p>
                            <img
                              src={Right_Arrow}
                              alt=""
                              className="transition-all duration-200 ease-in-out hover:translate-x-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Background Image Section - Beneath Content */}
                    <div
                      className="mt-[20px] relative p-[10px] md:py-[20px] md:px-[25px] rounded-[10px] lg:rounded-[20px] overflow-hidden bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${Coloredbg})`
                      }}
                    >
                      <img src={Composebg} alt="rounded-[10px] max-w-full"/>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 mt-[40px] lg:grid-cols-4 gap-x-[20px] md:gap-x-[56px] md:gap-y-[30px]">
                      <div className=''>
                        <div>
                          <div className="flex gap-y-[15px] items-start mb-[10px] flex-col">
                            <img src={Fields} alt='Icon' className="max-w-full"/>
                            <p className='text-[14px] whitespace-pre-wrap'>Fields</p>
                          </div>
                          <p className="text-[#9e9e9e] text-[14px] whitespace-break-spaces">Fit field types to content,<br/>not the other way around.</p>
                        </div>
                      </div>

                      <div className=''>
                        <div>
                          <div className="flex gap-y-[15px] items-start mb-[10px] flex-col">
                            <img src={Multi} alt='Icon' className="max-w-full"/>
                            <p className='text-[14px] whitespace-pre-wrap'>Multi-relation field</p>
                          </div>
                          <p className="text-[#9e9e9e] text-[14px] "> Connect CMS collections and link your content with a few clicks.</p>
                        </div>
                      </div>

                      <div className=''>
                        <div>
                          <div className="flex gap-y-[15px] items-start mb-[10px] flex-col">
                            <img src={Repeater} alt='Icon' className="max-w-full"/>
                            <p className='text-[14px] whitespace-pre-wrap'>Repeater</p>
                          </div>
                          <p className="text-[#9e9e9e] text-[14px]"> Quickly replicate and customize content to eliminate repetitive tasks.</p>
                        </div>
                      </div>

                      <div className=''>
                        <div>
                          <div className="flex gap-y-[15px] items-start mb-[10px] flex-col">
                            <img src={Unlimited} alt='Icon' className="max-w-full"/>
                            <p className='text-[14px] whitespace-pre-wrap'>Unlimited fields</p>
                          </div>
                          <p className="text-[#9e9e9e] text-[14px] "> Add hundreds of fields to CMS collections without hitting a limit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
