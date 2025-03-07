'use client';

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

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
  { name: "Dec", open: 250, completed: 690 },
];


const areaData = barData.map(({ name, completed }) => ({
  month: name,
  value: completed / 25,
}));

const years = ["2022", "2023", "2024", "2025"];

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div className="p-4 bg-gray-100">
  
      <div className="grid grid-cols-1 lg:grid-cols-[332px_1fr] gap-4">
        
       
        <div className="grid grid-rows-2 gap-4">
        
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <h2 className="text-base font-semibold text-gray-800">Assets Overview</h2>
              <p className="text-sm text-gray-500 mt-1">Replacement cost</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-xl font-bold">$15.3k</p>
                <div className="flex flex-col items-end">
                  <div className="border border-green-200 bg-green-50 rounded-md px-2 flex items-center gap-1">
                    <img src="/images/arrow.png" alt="arrow" width={12} height={12} />
                    <span className="text-green-700 font-medium">37%</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">vs last month</p>
                </div>
              </div>
            </div>
         
            <div style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" hide />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#14553E"
                    fill="url(#colorGreen)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Added Assets */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <h2 className="text-base font-semibold text-gray-800">Added Assets</h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-xl font-bold">3.7%</p>
                <div className="flex flex-col items-end">
                  <div className="border border-green-200 bg-green-50 rounded-md px-2 flex items-center gap-1">
                    <img src="/images/arrow.png" alt="arrow" width={12} height={12} />
                    <span className="text-green-700 font-medium">5.4%</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">vs last month</p>
                </div>
              </div>
            </div>
            
            <div style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" hide />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#14553E"
                    fill="url(#colorBlue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      
        <div className="bg-white rounded-lg shadow-md flex flex-col">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-800">Tickets Overview</h2>
            <select
              className="border border-gray-300 px-3 py-1 rounded-md text-green-700 font-semibold"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          
          <div className="px-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="text-gray-600 text-sm font-medium">Open rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-700 rounded-full"></span>
              <span className="text-gray-600 text-sm font-medium">Completed</span>
            </div>
          </div>

        
          <div style={{ height: 250 }} className="px-4 pb-4 mt-2 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                barCategoryGap={10}
                margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
              >
                <CartesianGrid stroke="#ccc" vertical={false} horizontal={true} />
                <XAxis dataKey="name" tickMargin={20} />
                <YAxis tickCount={6} tick={{ fill: "#88" }} axisLine={false} />
                <Tooltip />
                <Bar dataKey="completed" stackId="a" fill="#14553E" barSize={30} radius={[10, 10, 0, 0]} />
                <Bar dataKey="open" stackId="a" fill="#d1d5db" barSize={30} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
