"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import SidebarItem from './sidebar-items';
import { TbAssetFilled } from "react-icons/tb";
import { BsFillTicketFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; 
import { useRouter } from 'next/navigation'; 

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const router = useRouter();
  const items = [
    { label: 'Dashboard', href: '/dashboard', icon: <RxDashboard className='text-[#868E96] w-[18px] h-[18px]' /> },
    { label: 'Assets', href: '/tasks', icon: <TbAssetFilled className='text-[#868E96] w-[18px] h-[18px]' /> },
    { label: 'Tickets', href: '/tickets', icon: <BsFillTicketFill className='text-[#868E96] w-[18px] h-[18px]' /> },
    { label: 'Audience', href: "/members", icon: <IoPersonOutline className='text-[#868E96] w-[18px] h-[18px]' /> },
  ];

  const handleClick = (href: string) => {
    router.push(href); 
    setIsOpen(false);  
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-full"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg w-[285px] transition-transform duration-300 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:block`}>
        <div className="flex flex-col h-full px-4 py-6">
          <div className="flex justify-center items-center">
            <Image src="/images/logo.png" alt="logo" width={187} height={135} />
          </div>

          <div className="flex-grow mt-6">
            <ul className="space-y-4">
              {items.map((item, index) => (
                <SidebarItem 
                  key={index}
                  isActive={false} 
                  onClick={() => handleClick(item.href)} 
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </ul>
          </div>

          <button type="button" className="flex items-center gap-4 py-3 px-4 mb-6">
            <Image src="/images/logout.png" alt="logout" width={18} height={20} />
            <h1 className="text-[16px] text-[#343A40] font-[600]">Logout</h1>
          </button>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Sidebar;
