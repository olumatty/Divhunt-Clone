import React from 'react'
import Logo from '../assets/logo11.svg'
const Header = () => {
  return (
    <nav className=' flex items-center transition-nav justify-between  px-6 lg:px-20 relative z-30 py-6' >
      <div>
        <img src={Logo} alt='Logo' />
        </div>
            <ul className='flex items-center space-x-20'>
                <li className='text-[#9e9e9e] hover:text-white font-[16px] cursor-pointer'> MarketPlace</li>
                <li className='text-[#9e9e9e] hover:text-white font-[16px]  cursor-pointer'>Enterprise</li>
                <li className='text-[#9e9e9e] hover:text-white font-[16px] cursor-pointer'>Pricing</li>
            </ul>
            <div className='flex items-center space-x-10'>
                <button className='text-[#9e9e9e] hover:text-white  font-[16px] cursor-pointer'>Log In</button>
                <button className='text-white button font-bold px-[24px] py-[12px] font-[16px]  rounded-lg'>Build for free</button>
            </div>
    </nav>
  )
}

export default Header
