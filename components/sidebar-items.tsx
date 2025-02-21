import Image from 'next/image';
import React from 'react';

interface SidebarItemProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
  label: string;
  icon: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ index, isActive, onClick, label, icon }) => {
  return (
    <li
      className={`flex items-center gap-3  py-3 px-2 rounded-[6px] text-[16px] text-[#343A40] font-[600] my-4 cursor-pointer transition-all duration-300 ease-in-out 
        ${isActive ? 'bg-[#E3E3E3] text-[#14553E]' : 'hover:bg-[#E3E3E3] hover:text-[#14553E]'}`}
      onClick={() => onClick(index)}
    >
 
      {icon}
      {label}
    </li>
  );
};

export default SidebarItem;