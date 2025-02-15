import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo11.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
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
      className={`fixed top-0 w-full z-[9999] h-[80px] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <section className="section section-main bg-[#070709] shadow-md">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
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

            <div className="hidden lg:flex items-center space-x-10">
              <button className="text-[#9e9e9e] hover:text-white text-[16px] font-semibold cursor-pointer">
                Log In
              </button>
              <button className="text-white button px-6 py-3 cursor-pointer font-semibold rounded-lg hover:bg-opacity-80">
                Build for free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white cursor-pointer focus:outline-none"
              >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
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
