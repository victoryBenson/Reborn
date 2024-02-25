import React from 'react'
import { IoLogoIonic } from "react-icons/io";

export const Logo = () => {
  return (
    <p className='flex items-center md:text-3xl text-2xl font-bold'>
        <IoLogoIonic className='mt-1'/>
        <span className=''>Reborn</span>
    </p>
  )
}