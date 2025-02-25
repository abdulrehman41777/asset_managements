"use client";
import React from "react";

const tickets = [
  { id: "1651-1651", name: "Error in Drawer", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Abandoned cart", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Error in Drawer", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Abandoned cart", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
  { id: "1651-1651", name: "Fan not working", assigned: "John Smith", status: "Sent", time: "02/03/2024 at 1:35pm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la..." },
];

const TicketTable = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
   
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">All Tickets</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
          + Add Ticket
        </button>
      </div>

    
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
        
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              <th className="px-4 py-3 border">Ticket Number</th>
              <th className="px-4 py-3 border">Ticket Name</th>
              <th className="px-4 py-3 border">Assigned To</th>
              <th className="px-4 py-3 border">Status</th>
              <th className="px-4 py-3 border">Time</th>
              <th className="px-4 py-3 border">Description</th>
            </tr>
          </thead>

        
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} className="border text-gray-700">
                <td className="px-4 py-3 border">{ticket.id}</td>
                <td className="px-4 py-3 border font-semibold">{ticket.name}</td>
                <td className="px-4 py-3 border">{ticket.assigned}</td>
                <td className="px-4 py-3 border">
                  <span className="px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                    {ticket.status}
                  </span>
                </td>
                <td className="px-4 py-3 border">{ticket.time}</td>
                <td className="px-4 py-3 border text-gray-500">{ticket.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
