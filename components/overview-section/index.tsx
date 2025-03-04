'use client';

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from "recharts";

const barData = [
  { name: "Jan", open: 200, completed: 690 },
  { name: "Feb", open: 250, completed: 750 },
  { name: "Mar", open: 220, completed: 600 },
  { name: "Apr", open: 300, completed: 560 },
  { name: "May", open: 270, completed: 600 },
  { name: "Jun", open: 240, completed: 560 },
  { name: "Jul", open: 260, completed: 570 },
  { name: "Aug", open: 280, completed: 580 },
  { name: "Sep", open: 290, completed: 590 },
  { name: "Oct", open: 310, completed: 600 },
  { name: "Nov", open: 230, completed: 490 },
  { name: "Dec", open: 250, completed:690 },
];

const areaData = barData.map(({ name, completed }) => ({ month: name, value: completed / 25 }));

const years = ["2022", "2023", "2024", "2025"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div className="p-[0.6vh] bg-gray-100 min-h-screen pt-8">
      <div className="grid grid-cols-4 gap-[0.2vh] ">
        <div className="col-span-1 flex flex-col gap-[0.2vh]  ">
        <div className="bg-white p-4 rounded-[5px] shadow w-full h-100">
        <span className="text-[20px] font-bold font-[Inter] text-[#212529] ">Assets Overview</span>
       <p className="text-[#868E96] pt-3 ">Replacement cost</p>
  
  {/* Upper Row with $15.3k on left and Arrow+37% on right */}
  <div className="flex justify-between items-center">
    <p className="text-[28px] font-bold pt-4">$15.3k</p>

    {/* 37% + vs last month */}
    <div className="flex flex-col items-end">
      <div className='border border-[#D3F9D8] w-[71px] h-[24px] bg-[#ECFDF3]  rounded-[8px] flex items-center px-[10px] gap-1'>
        <img src="/images/arrow.png" alt='arrow' width={12} height={12} />
        <span className='text-[14px] text-[#2B8A3E] font-[500] '>37%</span>
      </div>
      <p className="text-[16px] text-[#495057] font-[Inter] font-medium pt-4">vs last month</p>
    </div>
  </div>

  <ResponsiveContainer width="100%" height={140}>
    <AreaChart data={areaData}>
      <defs>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" hide />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#14553E" fill="url(#colorGreen)" strokeWidth={2} />
    </AreaChart>
  </ResponsiveContainer>
</div>


<div className="bg-white p-4 rounded-[5px] shadow w-full">
  <h3 className="text-[#868E96] font-semibold text-[16px]">Added Assets</h3>
  
  {/* Upper Row with 3.7% on left and Arrow+5.4% on right */}
  <div className="flex justify-between items-center pb-6">
    <p className="text-[32px] font-semibold pt-6  ">3.7%</p>

    {/* 5.4% + vs last month */}
    <div className="flex flex-col items-end">
      <div className='border border-[#D3F9D8] w-[71px] h-[24px] bg-[#ECFDF3] rounded-[8px] flex items-center px-[10px] gap-1'>
        <img src="/images/arrow.png" alt='arrow' width={12} height={12} />
        <span className='text-[14px]  text-[#2B8A3E] font-[500]'>5.4%</span>
      </div>
      <p className="text-[16px] text-[#495057] font-[Inter] font-medium pt-4">vs last month</p>
    </div>
  </div>

  <ResponsiveContainer width="100%" height={140}>
    <AreaChart data={areaData}>
      <defs>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" hide />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#14553E" fill="url(#colorGreen)" strokeWidth={2} />
    </AreaChart>
  </ResponsiveContainer>
</div>

        </div>
        <div className="col-span-3 bg-white p-8">
  {/* Heading + Year Selection Row */}
  <div className="flex justify-between items-center">
    <span className="text-[24px] font-bold font-[Inter] text-[#212529]">Tickets Overview</span>

    {/* Dropdown + vs last month alignment */}
    <div className="flex flex-col items-end">
      <select 
        className="w-[119px] h-[40px] border border-[#DEE2E6] font-[Inter] px-4 py-1 rounded-[8px] text-[#1C8660] font-semibold"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      
    </div>
  </div>

  {/* Legend Section */}
  <div className="flex items-center gap-4 pt-9 pb-14">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-[#EAECF0] rounded-full"></span>
      <span className="text-[#495057] font-medium font-[Inter] text-[16px]">Open Rate</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-[#14553E] rounded-full"></span>
      <span className="text-[#495057] text-[16px] font-medium font-[Inter]  ">Completed</span>
    </div>
  </div>

  {/* Chart Section */}
  <ResponsiveContainer width="100%" height={350}>
  <BarChart data={barData} barCategoryGap={10} margin={{ bottom: 50 }}>
    <CartesianGrid stroke="#ccc" vertical={false} horizontal={true} />
    
    {/* X-axis will have lines, but Y-axis bottom line is removed */}
    <XAxis dataKey="name" tick={{ dy: 40 }} />
    <YAxis tickCount={6} tick={{ fill: "#88" }} axisLine={false} />
    
    <Tooltip />
    {/* Updated radius: sirf upar rounded, neeche straight */}
    <Bar dataKey="completed" stackId="a" fill="#14553E" barSize={35} radius={[10, 10, 0, 0]} />
    <Bar dataKey="open" stackId="a" fill="#d1d5db" barSize={35} radius={[10, 10, 0, 0]} />
  </BarChart>
</ResponsiveContainer>



</div>

      </div>
    </div>
  );
}
