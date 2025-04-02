import { NavFooter } from '@/constant/constant'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-evenly w-full items-start gap-4 py-16 border-b-[0.8px] border-[#D2D2D2]'>
            <div className='flex flex-col items-start gap-4'>
                <h5 className='uppercase text-[#00329B] font-bold text-[16px]'>logo</h5>
                <p className='text-[#545454] leading-normal text-[16px] max-w-[372px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <h6 className='text-[#545454] leading-normal text-[16px] max-w-[372px]'>@Lorem</h6>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <h5 className='text-black font-bold text-[17px]'>About us</h5>
                <ul className='text-[#545454] leading-normal text-[16px] max-w-[372px]'>
                    {NavFooter.map((nav) =>(<li className='list-none' key={nav.id}>{nav.name}</li>))}
                </ul>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <h5 className='text-black font-bold text-[17px]'>Contact us</h5>
                <p className='text-[#545454] leading-normal text-[16px] max-w-[372px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <h6 className='text-[#545454] leading-normal text-[16px] max-w-[372px]'>+908 89097 890</h6>
            </div>
            <div className='flex self-end-safe gap-4'>
                <Image src="/facebook.svg" alt="facebook" width={25} height={25} />
                <Image src="/instagram.svg" alt="instagram" width={25} height={25} />
                <Image src="/twitter.svg" alt="twitter" width={25} height={25} />
                <Image src="/linkedin.svg" alt="linkedin" width={25} height={25} />
            </div>
        </div>
        <h4 className='text-[#686868] text-[13px] leading-6 py-5'>
        Copyright ® 2021 Lorem All rights Rcerved
        </h4>
    </div>
  )
}
