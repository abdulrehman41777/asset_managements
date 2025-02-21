'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import SidebarItem from './sidebar-items';
import { TbAssetFilled } from "react-icons/tb";
import { BsFillTicketFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";


const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const items = [
    { label: 'Dashboard', icon: <RxDashboard className='text-[#868E96] w-[18px] h-[18px]' /> },
    { label: 'Assets', icon: <TbAssetFilled className='text-[#868E96] w-[18px] h-[18px] ' /> },
    { label: 'Tickets', icon: <BsFillTicketFill className='text-[#868E96] w-[18px] h-[18px] ' /> },
    { label: 'Audience', icon: <IoPersonOutline className='text-[#868E96] w-[18px] h-[18px] ' /> },
  ];

  return (
    <>
      <div className=' w-[285px] h-dvh bg-[#fff] relative '>
        <div className=' px-2 py-4 '>
          <div className=' border-[#000] flex justify-center items-center'>
            <Image src="/images/logo.png" alt='logo' width={187} height={135} />
          </div>
          <div className=' py-4'>
            <ul className=''>
              {/* <li className='flex items-center gap-3 border border-[#000] py-3 px-2 rounded-[6px] text-[16px] text-[#343A40] font-[600] my-4 hover:bg-[#E3E3E3] focus:bg-[#E3E3E3] focus:fixed  cursor-pointer transition-all duration-300 ease-in-out'><RxDashboard className='text-[#868E96] w-[18px] h-[18px]' />Dashboard</li> */}
              {items.map((item, index) => (
                <SidebarItem
                  key={index}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={handleClick}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </ul>
          </div>

          <button type='button' className=' flex items-center gap-4 absolute bottom-10 left-6 py-3 px-2 cursor-pointer'>
            <div>
              <Image src="/images/logout.png" alt='logout' width={18} height={20} />
            </div>
            <h1 className='text-[16px] text-[#343A40] font-[600]'>Logout</h1>
          </button>
        </div>


      </div>
    </>
  )
}

export default Sidebar

