import Image from 'next/image';
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

interface DashboardHeaderProps {
  toggleSidebar: () => void; 
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({toggleSidebar }) => {
  return (
    <>
      <div className=' border-[#000] w-full h-[80px] bg-[#fff] flex justify-between items-center px-[32px]' >
        <div className='flex gap-4 items-center'>
          <IoMenu className='w-[35] h-[35] cursor-pointer' onClick={toggleSidebar}/>
          <h1 className='text-[20px] text-[#212529] font-[500] leading-[18px]'>Hello, Marc!</h1>
        </div>
        <div className=' border-[#c42e2e] flex items-center gap-4'>
          <div className=' border-[#000] flex relative'>
            <IoSearchSharp className='w-[20px] h-[20px] text-[#868E96]  absolute left-2 top-2.5' />
            <input type='search' placeholder='Search here' className='  w-[270px] bg-[#F8F9FA] py-2 pl-[32px] pr-[10px] rounded-[8px]' />
          </div>
          <div className=' w-[40px] h-[40px] flex justify-center items-center'>
            <Image src="/images/bell.png" alt='bell' width={24} height={24} />
          </div>
          <div className=' flex items-center gap-3'>
            <div className=' flex items-center gap-2'>
              <div className='w-[40px] h-[40px] bg-[#FD7E14] flex justify-center items-center rounded-[20px]'>
                <span className='text-[16px] text-[#fff] font-[400] leading-[24px]'>MJ</span>
              </div>
              <div className=' py-[2px]'>
                <h3 className='text-[14px] text-[#495057] font-[400] leading-[18px] '>Marc Jacob</h3>
                <span className='text-[13px] text-[#495057] font-[400] leading-[18px] '>marco@goodmail.io</span>
              </div>
            </div>
            <FaAngleDown className='text-[#212529] w-[12px] h-[12px] ' />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader