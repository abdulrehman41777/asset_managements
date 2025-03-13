'use client';
import DashboardHeader from '@/components/dashboard-header';
import Sidebar from '@/components/sidebar';
import MainContent from '@/main-content';
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // By default, sidebar closed on mobile

    return (
        <div className="flex min-h-screen bg-gray-100">
            
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-50 transition-all duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0 w-[250px]" : "-translate-x-full w-0"} md:w-[285px] md:translate-x-0`}
            >
                <Sidebar />
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute top-4 right-4 md:hidden p-2 bg-gray-200 rounded-full"
                >
                    <X className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 transition-all duration-300 ease-in-out md:ml-[285px]">
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsSidebarOpen(true)} 
                    className="absolute top-4 left-4 p-2 bg-gray-200 rounded-full md:hidden"
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>

                <DashboardHeader />
                <div className="my-10 mx-4 md:mx-8">
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default Page;
