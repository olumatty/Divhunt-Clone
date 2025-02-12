import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo11.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between px-6 lg:px-20 relative z-30 py-6'>
      <div>
        <img src={Logo} alt='Logo' />
      </div>
      
      {/* Desktop Navigation */}
      <ul className='hidden lg:flex items-center space-x-20'>
        <li className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold  cursor-pointer'>MarketPlace</li>
        <li className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold cursor-pointer'>Enterprise</li>
        <li className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold cursor-pointer'>Pricing</li>
      </ul>
      <div className='hidden lg:flex items-center space-x-10'>
        <button className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold  cursor-pointer'>Log In</button>
        <button className='text-white button font-bold px-[24px] py-[12px] cursor-pointer font-semibold  font-[16px] rounded-lg button:Hover'>Build for free</button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className='lg:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-white cursor-pointer focus:outline-none'>
          {isOpen ? <X size={30} className='text-white' /> : <Menu size={30} className='text-white' />}
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-16 pl-3 w-full text-white shadow-lg lg:hidden'>
          <ul className='flex flex-col flex-start py-6 space-y-6'>
            <li className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold cursor-pointer'>MarketPlace</li>
            <li className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold cursor-pointer'>Enterprise</li>
            <li className='text-[#9e9e9e] hover:text-white font-[16px] font-semibold cursor-pointer'>Pricing</li>
            <button className='text-[#9e9e9e] hover:text-white font-[16px] cursor-pointer hidden'>Log In</button>
            <button className='text-white button font-bold py-[12px] w-[30%] md:w-[20%] button:Hover font-semibold text-center cursor-pointer font-[16px] rounded-lg'>Build for free</button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
