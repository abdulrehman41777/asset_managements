import React from 'react'
import TotalAssets from './total-assets'
import TicketRaised from './ticket-raised'
import TotalEmployee from './total-employee'

const MainAssetsCards = () => {
  return (
    <>
    <div className=' flex justify-between gap-6'>
        <TotalAssets/>
        <TicketRaised/>
        <TotalEmployee/>  
    </div>
    </>
  )
}

export default MainAssetsCards