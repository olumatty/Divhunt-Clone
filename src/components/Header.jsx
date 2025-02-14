import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo11.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-9999">
      <section className="section section-main">
        <div className="w-[100%] max-w-[1400px] mt-0 ml-auto mr-auto px-[20px] mb-0">
          <nav className="flex items-center justify-between px-6 lg:px-20 sticky top-0 z-9999 py-6">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img src={Logo} alt="Logo" />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-20">
              <li
                onClick={() => navigate("/marketplace")}
                className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
              >
                MarketPlace
              </li>
              <li
                onClick={() => navigate("/enterprise")}
                className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
              >
                Enterprise
              </li>
              <li
                onClick={() => navigate("/pricing")}
                className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
              >
                Pricing
              </li>
            </ul>

            <div className="hidden lg:flex items-center space-x-10">
              <button className="text-[#9e9e9e] hover:text-white font-[16px] cursor-pointer">
                Log In
              </button>
              <button className="text-white button px-[24px] py-[12px] cursor-pointer font-semibold rounded-lg hover:bg-opacity-80">
                Build for free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white cursor-pointer focus:outline-none"
              >
                {isOpen ? (
                  <X size={30} className="text-white" />
                ) : (
                  <Menu size={30} className="text-white" />
                )}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-16 left-0 w-full bg-[#070709] text-white shadow-lg lg:hidden">
                <ul className="flex flex-col items-start py-6 space-y-6 px-6">
                  <li
                    onClick={() => navigate("/marketplace")}
                    className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
                  >
                    MarketPlace
                  </li>
                  <li
                    onClick={() => navigate("/enterprise")}
                    className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
                  >
                    Enterprise
                  </li>
                  <li
                    onClick={() => navigate("/pricing")}
                    className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
                  >
                    Pricing
                  </li>
                  <button className="text-white button py-[12px] w-[30%] md:w-[20%] font-semibold text-center cursor-pointer text-[16px] rounded-lg">
                    Build for free
                  </button>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
