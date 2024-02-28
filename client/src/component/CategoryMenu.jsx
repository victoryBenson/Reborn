import React from 'react'
import { FaComputerMouse } from 'react-icons/fa6'
import { MdSportsTennis } from 'react-icons/md'
import { PiShirtFoldedLight } from 'react-icons/pi'
import { TbPerfume } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export const CategoryMenu = () => {
  return (
    <div className='flex justify-center p-4 '>
        <div className='flex font-light text-lg transition-all space-x-6 text-ivory bg-brown p-2 rounded'>
            <NavLink to={`/category/all-category`} className={({isActive}) => isActive ? "flex items-center font-bold cursor-pointer" : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`}><PiShirtFoldedLight className='mx-1'/>All</NavLink>
            <NavLink to={`/category/fashion`} className={({isActive}) => isActive ? "flex items-center font-bold cursor-pointer" : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`}><PiShirtFoldedLight className='mx-1'/>Fashion</NavLink>
            <NavLink to={`/category/beauty`} className={({isActive}) => isActive ? "flex items-center font-bold cursor-pointer" : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`}><TbPerfume className='mx-1'/>Beauty</NavLink>
            <NavLink to={`/category/sports`} className={({isActive}) => isActive ? "flex items-center font-bold cursor-pointer" : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`}><MdSportsTennis className='mx-1'/>Sports</NavLink>
            <NavLink to={`/category/digital`} className={({isActive}) => isActive ? "flex items-center font-bold cursor-pointer" : `cursor-pointer hover:underline decoration-2 underline-offset-4 flex items-center`}><FaComputerMouse className='mx-1'/>Digital</NavLink>
        </div>
    </div>
  )
}
