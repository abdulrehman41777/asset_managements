import Image from 'next/image';
import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

interface AssetCardProps {
  title: string;
  value: number;
  percentage: string;
  iconSrc: string;
  borderColor: string;
  bgColor: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ title, value, percentage, iconSrc, borderColor, bgColor }) => {
  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className={`border-8 ${borderColor} ${bgColor} w-12 h-12 rounded-full flex justify-center items-center`}>
          <Image src={iconSrc} alt="icon" width={20} height={17} />
        </div>
        <HiOutlineDotsVertical className="text-gray-400 w-5 h-5" />
      </div>


      <div className="mt-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="flex justify-between items-center">
          <h1 className="text-gray-800 text-3xl font-semibold">{value}</h1>
          <div className="border border-green-200 w-[71px] h-[24px] bg-green-50 flex items-center px-2 gap-1 rounded-md">
            <Image src="/images/arrow.png" alt="arrow" width={12} height={12} />
            <span className="text-green-600 text-sm font-medium">{percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
