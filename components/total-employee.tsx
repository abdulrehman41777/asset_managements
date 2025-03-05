import Image from 'next/image'
import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const TotalEmployee = () => {
    return (
        <>
            <div className=' w-[100%] p-3 bg-[#fff] rounded-[12px] '>
                <div className=' flex flex-col gap-5'>
                    <div className=' border-[#000] flex justify-between '>
                        <div className='border-8 border-[#E8590C] bg-[#F76707] w-[48px] h-[48px] rounded-[50%]  flex justify-center items-center'>
                            <Image src="/images/a3_icons.png" alt='icon' width={20} height={17} />
                        </div>
                        <HiOutlineDotsVertical className='text-[#ADB5BD] w-[20px] h-[20px]' />
                    </div>
                    <div className=' border-[#000]'>
                        <h3 className='text-[#495057] text-[14px] font-[500]'>Total Assets</h3>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[#212529] text-[36px] font-[600]'>983</h1>
                            <div className='border border-[#D3F9D8] w-[71px] h-[24px] bg-[#ECFDF3] flex items-center px-[10px] gap-1'>
                                <div>
                                    <Image src="/images/arrow.png" alt='arrow' width={12} height={12} />
                                </div>
                                <span className='text-[14px] text-[#2B8A3E] font-[500]'>100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalEmployee 