import Image from "next/image";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import DashboardHeader from "./dashboard-header";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const categories = [
  { id: 1, title: "ELECTRONICS", imageSrc: "/images/asset.png" , herf:"/assets" },
  { id: 2, title: "ELECTRONICS", imageSrc: "/images/asset.png" ,herf:"/assets"  },
  { id: 3, title: "ELECTRONICS", imageSrc: "/images/asset.png" , herf:"/assets" },
  { id: 4, title: "ELECTRONICS", imageSrc: "/images/asset.png", herf:"/assets"  },
  { id: 5, title: "ELECTRONICS", imageSrc: "/images/asset.png",  },
];

const Asset = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0 w-[250px]" : "-translate-x-full w-0"} md:w-[285px] md:translate-x-0`}
      >
        <Sidebar />
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 md:hidden p-2 bg-gray-200 rounded-full"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-[285px] transition-all duration-300 ease-in-out">
        
        {/* Mobile Sidebar Toggle Button */}
        <button 
          onClick={() => setSidebarOpen(true)} 
          className="absolute top-4 left-4 p-2 bg-gray-200 rounded-full md:hidden"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <DashboardHeader />

        {/* Assets Section */}
        <div className="p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-4">Assets</h1>

          {/* Responsive Grid for Assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 md:p-6 shadow-md flex flex-col items-center border hover:border-[#14553E] rounded-lg"
              >
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  width={100}
                  height={140}
                  className="rounded-lg"
                />
                <h2 className="text-[15px] font-[Inter] font-semibold mt-2">
                  {category.title}
                </h2>
                <button className="mt-2 text-[12px] bg-[#14553E] font-[Inter] font-normal text-white px-4 py-2 rounded-[2px]">
                  View Assets
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asset;
