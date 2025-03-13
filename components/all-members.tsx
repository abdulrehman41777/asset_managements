"use client";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import { Menu, X, Search, Filter } from "lucide-react";

const members = [
  { name: "Michael Corleone", email: "xyzemail@example.com", phone: "(555) 123-4567", location: "Pakistan", profileCreated: "02/03/2024 at 1:35pm", designation: "IT Head" },
  { name: "Michael Corleone", email: "xyzemail@example.com", phone: "(555) 123-4567", location: "Pakistan", profileCreated: "02/03/2024 at 1:35pm", designation: "Graphic Designer" },
  { name: "Michael Corleone", email: "xyzemail@example.com", phone: "(555) 123-4567", location: "Pakistan", profileCreated: "02/03/2024 at 1:35pm", designation: "Graphic Designer" },
];

const MembersTable = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0 w-[250px]" : "-translate-x-full w-0"} md:w-[285px] md:translate-x-0`}>
        <Sidebar />
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 md:hidden p-2 bg-gray-200 rounded-full">
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 md:ml-[285px] transition-all duration-300 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <h1 className="text-xl font-semibold font-[outfit] text-[#212529]">All Members</h1>
            <div className="flex items-center gap-3">
              <Search className="text-gray-600 w-5 h-5 cursor-pointer" />
              <Filter className="text-gray-600 w-5 h-5 cursor-pointer" />
              <button className="bg-[#14553E] hover:bg-[#14553E] font-[Inter] font-medium text-white px-4 py-2 text-[12px] rounded">+ Add Member</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm border-b">
                  <th className="px-4 py-3 font-medium text-[12px]">Name</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Email</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Phone</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Location</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Profile Created</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Designation</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index} className="text-gray-700 border-b hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-[14px]">{member.name}</td>
                    <td className="px-4 py-3 text-[14px]">{member.email}</td>
                    <td className="px-4 py-3 text-[14px]">{member.phone}</td>
                    <td className="px-4 py-3 text-[14px]">{member.location}</td>
                    <td className="px-4 py-3 text-[14px]">{member.profileCreated}</td>
                    <td className="px-4 py-3 text-[14px]">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
