import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='relative overflow-hidden z-50 flex bg-[#1090CB1A]  pb-32 px-20 justify-center items-center gap-56'>
        <div className='flex flex-col items-start gap-[65px]'>
        <div className='flex flex-col gap-4'>
        <p className='max-w-[600px] text-black text-[40px] font-semibold'>
        Experienced <span className='text-[#1090CB]'>mobile and web</span> applications and website builders measuring.
        </p>
        <p className='max-w-[600px] text-[#5C5C5C] leading-8 text-[16px]'>
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
        </p>
        </div>
        <div className='flex gap-2 items-center'>
            <button className='text-white text-[16px] px-8 py-2 rounded-[10px] hover:bg-blue-400 bg-[#1090CB]'>Contact us</button>
            <button className='text-[#1090CB] text-[16px] px-8 py-2 rounded-[10px] hover:text-white bg-white hover:bg-blue-400 border boder-[#1090CB]'>View more</button>
        </div>
        </div>
        <Image src="/hero.svg" alt="hero" width={597} height={763} />
        <Image className="absolute top-52 right-0 z-0" src="/Vector 1.svg" alt="hero" width={50} height={50} />
        <div className='absolute top-20 right-96 z-50 rounded-full bg-radial-[at_50%_75%] form-[#FDFFEA] to-[#C4C4C400] to-0% w-[500px] h-[500px]'/>
    </div>
  )
}
