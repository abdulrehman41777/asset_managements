'use client';

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from "recharts";

const barData = [
  { name: "Jan", open: 200, completed: 500 },
  { name: "Feb", open: 250, completed: 550 },
  { name: "Mar", open: 220, completed: 480 },
  { name: "Apr", open: 300, completed: 520 },
  { name: "May", open: 270, completed: 530 },
  { name: "Jun", open: 240, completed: 560 },
  { name: "Jul", open: 260, completed: 570 },
  { name: "Aug", open: 280, completed: 580 },
  { name: "Sep", open: 290, completed: 590 },
  { name: "Oct", open: 310, completed: 600 },
  { name: "Nov", open: 230, completed: 490 },
  { name: "Dec", open: 250, completed: 510 },
];

const areaData = barData.map(({ name, completed }) => ({ month: name, value: completed / 25 }));

const years = ["2022", "2023", "2024", "2025"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div className="p-[0.6vh] bg-gray-100 min-h-screen pt-8">
      <div className="grid grid-cols-4 gap-[0.2vh] ">
        <div className="col-span-1 flex flex-col gap-[0.1vh] ">
          <div className="bg-white p-4 rounded-[5px] shadow w-full h-56">
            <h3 className="text-[#868E96]">Replacement Cost</h3>
            <p className="text-[32px] font-semibold">$15.3k</p>
            
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
                <Area type="monotone" dataKey="value" stroke="#16a34a" fill="url(#colorGreen)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded-[5px] shadow w-full h-56">
            <h3 className="text-[#868E96] font-semibold text-[16px]">Added Assets</h3>
            <p className="text-[32px] font-semibold">3.7%</p>
            <ResponsiveContainer width="100%" height={140}>
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" hide />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="url(#colorBlue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-3 bg-white p-8 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Tickets Overview</h2>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                <span className="text-gray-600 font-medium">Open Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-700 rounded-full"></span>
                <span className="text-green-700 font-medium">Completed</span>
              </div>
            </div>
            <select className="border border-gray-300 px-4 py-1 rounded-md text-gray-600 font-medium" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData} barCategoryGap={10} margin={{ bottom: 50 }}>
              <CartesianGrid stroke="#ccc" vertical={false} horizontal={true} />
              <XAxis dataKey="name" tick={{ dy: 40 }} />
              <YAxis tickCount={6} tick={{ fill: "#888" }} />
              <Tooltip />
              <Bar dataKey="completed" stackId="a" fill="#14532d" barSize={35} />
              <Bar dataKey="open" stackId="a" fill="#d1d5db" barSize={35} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
