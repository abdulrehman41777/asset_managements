// import DashboardHeader from '@/components/dashboard-header'
// import Sidebar from '@/components/sidebar'
// import TotalAssets from '@/components/total-assets'
// import React from 'react'

// const Page = () => {
//     return (
//         <>
//             <div className='flex gap-1 relative'>
//                 <div className=''>
//                     <Sidebar />
//                 </div>
//                 <div className='border border-[#000] w-[100%]'>
//                     <div className='w-full'>
//                         <DashboardHeader />
//                     </div>
//                     <div>
//                         <TotalAssets />
//                     </div>
//                 </div>


//             </div>

//         </>

//     )
// }

// export default Page





'use client';
import DashboardHeader from '@/components/dashboard-header';
import Sidebar from '@/components/sidebar';
import TotalAssets from '@/components/total-assets';
import MainContent from '@/main-content';
import React, { useState } from 'react';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className='flex'>
            {/* Sidebar */}
            <div className={`fixed h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'}`}>
                <div className=' w-full'>
                    <div className='w-full'>
                        <DashboardHeader toggleSidebar={toggleSidebar} />
                    </div>
                    <div className='my-10 mx-8'>
                        <MainContent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;