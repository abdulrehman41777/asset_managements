"use client";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const tickets = [
  { id: "1651-1651", name: "Error in Drawer", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Abandoned cart", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
];

const TicketTable = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
   
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-[285px]`}
      >
        <Sidebar />
       
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 md:hidden p-2 bg-gray-200 rounded-full"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

  
      <div className="flex-1 md:ml-[285px] p-6">
     
          {/* <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden mb-4 p-2 bg-green-600 text-white rounded-md flex items-center"
          >
            <Menu className="w-6 h-6 mr-2" />
          
          </button> */}

        <div className="bg-white shadow-lg rounded-lg p-6">
       
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold font-[outfit] text-[#212529]   ">All Tickets</h1>
            <button className="bg-[#14553E] hover:bg-[#14553E] font-[Inter] font-medium text-white px-4 py-2 text-[12px] ">
              + Add Ticket
            </button>
          </div>

   
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-collapse">
       
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm border-b">
                  <th className="px-4 py-3 font-medium text-[12px]">Ticket Number</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Ticket Name</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Assigned To</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Status</th>
                  <th className="px-4 py-3 font-medium text-[12px]">Time</th>
                  <th className="px-4 py-3 font-medium text-[12px]  ">Description</th>
                </tr>
              </thead>

              
              <tbody>
                {tickets.map((ticket, index) => (
                  <tr key={index} className="text-gray-700 hover:bg-gray-50 transition">
                    <td className="px-4 py-3  font-[Inter] font-normal text-[14px]  ">{ticket.id}</td>
                    <td className="px-4 py-3 font-semibold  font-[Inter] text-[14px]  ">{ticket.name}</td>
                    <td className="px-4 py-3  font-[Inter] font-normal text-[14px]  text-[#495057]   ">{ticket.assigned}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 text-xs border-[1px] font-medium font-[Inter] text-[#2B8A3E] bg-green-100 rounded-[5px]">
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-[Inter] font-normal text-[14px]  ">{ticket.time}</td>
                    <td className="px-4 py-3 text-[#212529]  font-[Inter] font-medium text-[14px]  ">{ticket.description}</td>
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

export default TicketTable;
