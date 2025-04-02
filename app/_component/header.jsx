import { NavMain } from '@/constant/constant'
import React from 'react'

export const Header = () => {

  return (
    <div className="flex justify-between items-center px-20 py-8 border-b-[0.7px] border-[#C4C4C4]">
        <span className="uppercase font-bold text-[#1090CB] font-poppins text-[29px]">logo</span>
        <div className="max-sm:hidden flex gap-10 items-center font-poppins">
            <ul className="flex gap-10 ">
            {NavMain.map((nav) =>(
                <li className="text-[16px]" key={nav.id}>
                {nav.name}
                </li>
            ))
            }
            </ul>
            <button className="text-white px-4 py-2 rounded-md hover:bg-blue-400 bg-[#1090CB]">Contact us</button>
        </div>
    </div>
  )
}
