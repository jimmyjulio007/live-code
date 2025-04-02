import Image from 'next/image'
import React from 'react'

export const Trusted = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
        <p className='text-black text-2xl font-medium leading-9'>You will be in good Company</p>
        <div className='flex justify-center items-center gap-28'>
            <Image src="/beneoshop.png" alt="beneoshop" width={185} height={185} />
            <Image src="/caspio.png" alt="beneoshop" width={185} height={185} />
            <Image src="/HyperGrid.png" alt="beneoshop" width={185} height={185} />
            <Image src="/leotrippi.png" alt="beneoshop" width={185} height={185} />
        </div>
    </div>
  )
}
