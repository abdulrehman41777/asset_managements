import Image from 'next/image';
import React from 'react';
import { IoSearchSharp, IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";



const DashboardHeader = ()=> {
  return (
    <div className="border-[#000] w-full h-[80px] bg-white flex justify-between items-center px-4 md:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-4">
      
        <h1 className="text-lg text-[#212529] font-medium">Hello, Marc!</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Box (Hidden on small screens) */}
        <div className="hidden md:flex relative">
          <IoSearchSharp className="w-5 h-5 text-[#868E96] absolute left-3 top-2.5" />
          <input
            type="search"
            placeholder="Search here"
            className="w-[200px] md:w-[270px] bg-[#F8F9FA] py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>

        {/* Notification Bell */}
        <div className="w-10 h-10 flex justify-center items-center">
          <Image src="/images/bell.png" alt="bell" width={24} height={24} />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* Profile Icon */}
            <div className="w-10 h-10 bg-[#FD7E14] flex justify-center items-center rounded-full">
              <span className="text-white text-base font-medium">MJ</span>
            </div>

            {/* User Info (Hidden on small screens) */}
            <div className="hidden md:block">
              <h3 className="text-sm text-[#495057] font-medium">Marc Jacob</h3>
              <span className="text-xs text-[#495057]">marco@goodmail.io</span>
            </div>
          </div>
          {/* Dropdown Icon */}
          <FaAngleDown className="text-[#212529] w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
