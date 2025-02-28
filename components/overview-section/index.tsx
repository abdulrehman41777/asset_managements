import { useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const assetData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 14 },
  { month: "Mar", value: 15 },
  { month: "Apr", value: 13 },
  { month: "May", value: 16 },
  { month: "Jun", value: 18 },
  { month: "Jul", value: 20 },
  { month: "Aug", value: 22 },
  { month: "Sep", value: 19 },
  { month: "Oct", value: 21 },
  { month: "Nov", value: 23 },
  { month: "Dec", value: 24 },
];

const ticketData = [
  { month: "Jan", open: 300, completed: 600 },
  { month: "Feb", open: 320, completed: 620 },
  { month: "Mar", open: 310, completed: 610 },
  { month: "Apr", open: 330, completed: 640 },
  { month: "May", open: 340, completed: 660 },
  { month: "Jun", open: 350, completed: 670 },
  { month: "Jul", open: 360, completed: 680 },
  { month: "Aug", open: 370, completed: 690 },
  { month: "Sep", open: 365, completed: 685 },
  { month: "Oct", open: 355, completed: 675 },
  { month: "Nov", open: 345, completed: 665 },
  { month: "Dec", open: 335, completed: 655 },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("This year");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-gray-600">Replacement Cost</h3>
          <p className="text-2xl font-semibold">$15.3k</p>
          <p className="text-green-500">↑ 37% vs last month</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={assetData}>
              <XAxis dataKey="month" hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-gray-600">Added Assets</h3>
          <p className="text-2xl font-semibold">3.7%</p>
          <p className="text-green-500">↑ 5.4% vs last month</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={assetData}>
              <XAxis dataKey="month" hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Tickets Overview</h3>
          <select
            className="p-2 border rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>This year</option>
            <option>Last year</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ticketData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Line type="monotone" dataKey="completed" stroke="#16a34a" strokeWidth={2} />
            <Line type="monotone" dataKey="open" stroke="#d1d5db" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
