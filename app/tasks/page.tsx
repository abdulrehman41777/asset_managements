"use client"
import React, { useState } from 'react'
import Assets from '@/components/assets'
import Sidebar from '@/components/sidebar'
import Mlayout from '@/layout/Mlayout'
import DashboardHeader from '@/components/dashboard-header'


const page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
    
      
  return (
   
   <>

  
     <DashboardHeader/>
    
      <Assets/>
   
   

 
 

        
   </>

      
        
       
         
      
  
  )
}

export default page
