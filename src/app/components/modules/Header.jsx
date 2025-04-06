import React from 'react'
import { PiUserCircleLight } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
function Header() {
  return (
 <header className='flex bg-white px-3 py-4 justify-between items-center w-[1200px] m-auto'>
    <div className=''>
      <h2 className='bg-[#ECECEC] px-7 py-2 rounded-2xl font-[500]'>logo</h2>
    </div>
    <div>
      <ul className='flex gap-6 text-sm font-[600] text-[#A0A0A0]'>
        <li>خانه</li>
        <li>طراحی سایت</li>
        <li>کمپین های بازاریابی و تبلیغاتی</li>
        <li>اتوماسیون و بازاریابی</li>
        <li>تولبد محتوا</li>
        <li>سئو</li>
        <li>تماس با ما</li>
      </ul>
    </div>

    <div className='flex gap-1'>
      <div className='border border-[#ECECEC] p-1 rounded-lg'><PiUserCircleLight className='text-[32px]'/></div>
      <div className='border border-[#ECECEC] p-1 rounded-lg'><RiSearch2Line className='text-[32px]'/></div>
      </div>  
 </header>
  )
}

export default Header