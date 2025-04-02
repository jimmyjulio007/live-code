import Image from 'next/image'
import React from 'react'

export const Card = ({image, title, description, color, width, height}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className={`p-4 rounded-[20px] bg-[${color}]`}>
            <Image src={image} alt={title} width={width} height={height} />
        </div>
        <div className='flex flex-col items-start'>
            <h4 className='text-black text-[20px] font-medium leading-9'>{title}</h4>
            <span className='text-[#969696] text-[15px] leading-6'>{description}</span>
        </div>
    </div>
  )
}
