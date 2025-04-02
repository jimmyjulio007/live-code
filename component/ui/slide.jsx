import React from 'react'
import { Card } from './card'
import Image from 'next/image'

export const Slide = () => {
  return (
    <div className='pb-14'>
    <div className='flex justify-center items-center'>
        <div className='flex flex-col items-start gap-14'>
            <Card image={'/service/website-content 1.svg'} color={'#EFEAFF'} title={'Lorem Ipsum is simply dummy text'} description={'Lorem Ipsum is simply dummy text'} width={41} height={41} />
            <p className='text-[#252525] text-[30px] leading-12 font-semibold max-w-[516px]'><span className='text-[#1090CB]'>Lorem Ipsum</span> is simply dummy text of the printing. </p>
            <p className='max-w-[476px] text-[#545454] leading-7 text-[16px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
        </div>
        <Image src="/mobile.png" alt="mobile" width={738} height={511} />
    </div>
    <div className='flex flex-row-reverse justify-center items-center'>
        <div className='flex flex-col items-start gap-14'>
            <Card image={'/service/website-content 1.svg'} color={'#EFEAFF'} title={'Lorem Ipsum is simply dummy text'} description={'Lorem Ipsum is simply dummy text'} width={41} height={41} />
            <p className='text-[#252525] text-[30px] leading-12 font-semibold max-w-[516px]'><span className='text-[#1090CB]'>Lorem Ipsum</span> is simply dummy text of the printing. </p>
            <p className='max-w-[476px] text-[#545454] leading-7 text-[16px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
        </div>
        <Image src="/mockup.png" alt="mobile" width={738} height={511} />
    </div>
    <div className='flex justify-center items-center'>
        <div className='flex flex-col items-start gap-14'>
            <Card image={'/service/website-content 1.svg'} color={'#EFEAFF'} title={'Lorem Ipsum is simply dummy text'} description={'Lorem Ipsum is simply dummy text'} width={41} height={41} />
            <p className='text-[#252525] text-[30px] leading-12 font-semibold max-w-[516px]'><span className='text-[#1090CB]'>Lorem Ipsum</span> is simply dummy text of the printing. </p>
            <p className='max-w-[476px] text-[#545454] leading-7 text-[16px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
        </div>
        <Image src="/vr.png" alt="mobile" width={738} height={511} />
    </div>
    </div>
  )
}
