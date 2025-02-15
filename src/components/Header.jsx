import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo11.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Toggle Body Scroll when Mobile Menu Opens
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(window.innerWidth > 1024); // Keep visible for mobile
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  // Add and remove event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full z-[9999] h-[80px] transition-transform duration-300 bg-[#070709] shadow-md ${
        isVisible ? "translate-y-0" : "-translate-y-full lg:-translate-y-full"
      }`}
    >
      <div className="w-full md:max-w-[1400px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4 relative">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex w-full max-w-[800px] justify-center items-center space-x-10">
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-10">
            <button className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer">
              Log In
            </button>
            <button className="text-white button px-6 py-3 cursor-pointer font-semibold rounded-lg hover:bg-opacity-80">
              Build for free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white cursor-pointer focus:outline-none p-2 z-[100]"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#070709] text-white transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden`}
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white cursor-pointer"
            >
              <X size={30} />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-6 mt-10">
            <li
              onClick={() => {
                navigate("/marketplace");
                setIsOpen(false);
              }}
              className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
            >
              MarketPlace
            </li>
            <li
              onClick={() => {
                navigate("/enterprise");
                setIsOpen(false);
              }}
              className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
            >
              Enterprise
            </li>
            <li
              onClick={() => {
                navigate("/pricing");
                setIsOpen(false);
              }}
              className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer"
            >
              Pricing
            </li>
            <button className="text-white button px-6 py-3 cursor-pointer font-semibold rounded-lg hover:bg-opacity-80">
              Build for free
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
