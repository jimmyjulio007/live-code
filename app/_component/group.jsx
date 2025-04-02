import Image from 'next/image'
import React from 'react'

export const Group = () => {
  return (
    <div className='flex justify-center items-center gap-10 py-32'>
        <div className='flex flex-col items-center gap-14 bg-[#F4F4F4] py-16 px-12 rounded-3xl'>
            <h2 className='text-[25px] text-center font-semibold leading-11 max-w-[365px]'>Lorem Ipsum is simply dummy text.</h2>
            <p className='max-w-[476px] text-[#545454] leading-7 text-[16px]'>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
            </p>
            <button className='text-white text-[16px] px-8 py-2 rounded-[10px] hover:bg-blue-700 bg-[#1090CB]'>View more</button>
        </div>
        <div className='relative flex flex-col items-center gap-14 bg-[#1090CB] py-16 px-12 rounded-3xl'>
            <h2 className='text-[25px] text-center font-semibold leading-11 max-w-[365px] text-white'>Lorem Ipsum is simply dummy text.</h2>
            <p className='max-w-[476px] text-white leading-7 text-[16px]'>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
            </p>
            <button className='text-[#1090CB] text-[16px] px-8 py-2 rounded-[10px] hover:bg-white/45 bg-white'>View more</button>
            <Image className="absolute -top-16 right-0" src="/Bell Angle.png" alt="hero" width={120} height={120} />
        </div>
    </div>
  )
}
