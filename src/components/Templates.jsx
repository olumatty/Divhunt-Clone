import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Template1 from "../assets/temp 1.png";
import Template2 from "../assets/temp2.png"
import Template3 from "../assets/tmp3.png"
import Template4 from "../assets/temp 4.png"
import Template5 from "../assets/temp5.png"
import Template6 from "../assets/temp6.png"
import Template7 from "../assets/temp7.png"
import Template8 from "../assets/temp 8.png"


const Templates = () => {
  return (
    <div className="pt-[60px] pb-[140px] block isolate">
      <div className="w-[100%] max-w-[1400px] mt-0 mx-auto px-[20px]">
        <div className="mb-[100px]">
          <div className="flex items-center mb-[40px]  justify-between">
            <p className="text-[22px] font-[500] whitespace-break-spaces mt-0 mb-0">
              Premium templates
            </p>
            <div className="text-[#9e9e9e] cursor-pointer flex gap-y-[10px] items-center transition-all duration-200 ease-in browser ">
              <p>Browse all templates </p>
              <div>
                <MdKeyboardArrowRight
                  height="14"
                  width="14"
                  className="text-[#9e9e9e] hover:text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-[20px] grid-cols-4">
            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template1}
                    alt="template1"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="text-[18px] whitespace-break-spaces mx-0">
                    Digital Wealth — SaaS  <br/>Website Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        $29
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Divhunt</p>
                </div>
              </div>
            </div>

            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template2}
                    alt="template2"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="font-[500] text-[18px] whitespace-break-spaces mx-0">
                    Bomba — SaaS Website<br/>Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        $49
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Juno studio</p>
                </div>
              </div>
            </div>

            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template3}
                    alt="template3"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="font-[500] text-[18px] whitespace-break-spaces mx-0">
                    Uzui — Business Website<br/>Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        $69
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Juno Studio</p>
                </div>
              </div>
            </div>


            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template4}
                    alt="template4"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="font-[500] text-[18px] whitespace-break-spaces mx-0">
                    TeamWave — SaaS Website Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        $29
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Cristain Mielu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Grid */}
        <div className="mb-[100px]">
          <div className="flex items-center mb-[40px]  justify-between">
            <p className="text-[22px] font-[500] whitespace-break-spaces mt-0 mb-0">
              Free templates
            </p>
            <div className="text-[#9e9e9e] cursor-pointer flex gap-y-[10px] items-center transition-all duration-200 ease-in browser ">
              <p>Browse all templates </p>
              <div>
                <MdKeyboardArrowRight
                  height="14"
                  width="14"
                  className="text-[#9e9e9e] hover:text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-[20px] grid-cols-4">
            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template5}
                    alt="template5"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="text-[18px] whitespace-break-spaces mx-0">
                    Damien — Portfolio Website Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        Free
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Divhunt</p>
                </div>
              </div>
            </div>

            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template6}
                    alt="template6"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="font-[500] text-[18px] whitespace-break-spaces mx-0">
                    Green Grid — Business <br/>Website Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        Free
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Divhunt</p>
                </div>
              </div>
            </div>

            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template7}
                    alt="template7"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="font-[500] text-[18px] whitespace-break-spaces mx-0">
                    Cosmic Creations — Agency Website Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        Free
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Divhunt</p>
                </div>
              </div>
            </div>


            <div>
              <div className="cursor-pointer transition-all duration-200 ease-linear text-white group">
                <div className="h-[358px] overflow-hidden rounded-[10px] mb-[10px]">
                  <img
                    src={Template8}
                    alt="template8"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-600 ease-in-out rounded-[10px] group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex gap-y-[40px] flex-start mb-[8px] justify-between">
                    <p className="font-[500] text-[18px] whitespace-break-spaces mx-0">
                    Fusion — Agency Website <br/>Template
                    </p>
                    <div className="flex">
                      <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces mt-0 mb-0">
                        Free
                      </p>
                    </div>
                  </div>
                <p className="text-[#9e9e9e] font-[500] whitespace-break-spaces">Divhunt</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div>
            
        </div>

      </div>
    </div>
  );
};

export default Templates;
