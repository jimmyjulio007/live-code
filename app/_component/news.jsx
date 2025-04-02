import Image from 'next/image'
import React from 'react'

export const News = () => {
  return (
    <div className='h-[534px] relative bg-[#E8F4FA] flex flex-col justify-center items-center gap-10'>
        <p className='text-[30px] font-semibold leading-12 text-center text-[#252525] max-w-[516px]'>
        Lorem Ipsum is simply dummy text of the printing. 
        </p>
        <div className='flex items-center gap-4'>
            <input type="text" placeholder='Email Address' className='p-4 rounded-[10px] shadow-sm bg-white w-[532px]' />
            <button className='uppercase font-medium text-white text-[16px] px-8 py-4  rounded-[10px] bg-black'>Subscribe</button>
        </div>
        <Image src="/Star.png" alt="star" className='absolute -top-9 left-[450px]' width={66} height={66} />
        <Image src="/pai.png" alt="pai" className='absolute top-28 right-[640px]' width={54} height={54} />
    </div>
  )
}
