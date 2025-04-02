import { Card } from '@/component/ui/card'
import React from 'react'

export const Service = () => {
  return (
    <div className='p-10 flex justify-evenly items-center border-b-[0.7px] border-[#C4C4C4]'>
        <Card image={'/service/website-content 1.svg'} color={'#EFEAFF'} title={'Web Application'} description={'Lorem Ipsum is simply'} width={41} height={41} />
        <Card image={'/service/seo-tag 1.svg'} color={'#ECFFDA'} title={'Web Application'} description={'Lorem Ipsum is simply'} width={41} height={41} />
        <Card image={'/service/immersive 1.svg'} color={'#DAE6FF'} title={'Web Application'} description={'Lorem Ipsum is simply'} width={41} height={41} />
        <Card image={'/service/coding (1) 1.svg'} color={'#FFE5DA'} title={'Web Application'} description={'Lorem Ipsum is simply'} width={41} height={41} />
    </div>
  )
}
