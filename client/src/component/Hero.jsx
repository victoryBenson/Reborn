import React from 'react'
import { heroData } from './database/Herodata.js'
import { Link } from 'react-router-dom'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SlFire } from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { IoLogoIonic } from 'react-icons/io';
import { FaArrowRightLong } from "react-icons/fa6";

const properties = {
    prevArrow: <BsArrowLeft className='mx-2' size={20}/>,
    nextArrow: <BsArrowRight className='mx-2' size={20}/>    
}

export const Hero = () => {  
  return (
    <div className='relative h-[50vh]'>
        <div className='text-center p-8'>
            <h1 className='font-bold p-2 text-3xl'>Good news from far away 🥇</h1>
            <p text-lg p-3>Let's see what people think of Reborn</p>
        </div>
        <Fade {...properties} indicators={false} scale={1.2}>
            {
                heroData.map((item, index)=> {
                    return (
                        <div key={index} style={{backgroundImage: `url(${item?.image})`}} className='relative h-full transition-all bg-cover bg-center'>
                            <span className='bg-black/20 absolute h-full w-full'></span>
                            <div className='absolute left-0 top-1/3 transition-all flex-col p-4 mx-5 drop-shadow'>
                                <span className='bg-ivory/30 rounded -z-10 drop-shadow absolute right-0 h-full top-0 w-full'></span>
                                <div className='md:text-5xl text-3xl font-bold flex flex-wrap transition-all my-6'>
                                    <span className='text-ivory drop-shadow shadow'>
                                        welcome to 
                                    </span>
                                    <div className='flex items-center md:text-5xl text-3xl font-bold text-blue'>
                                        <IoLogoIonic className='mt-1'/>
                                        <span>Reborn</span>
                                    </div>
                                </div>
                                <p className='font-bold text-lg py- flex items-center py-'>{item?.title}<SlFire className='mx-1 text-[#e56748]' /></p>
                                <h1 className='md:text-[3rem] text-3xl font-bold text-blue py-5' style={{color: item?.text}}>{item?.header}</h1>
                                <Link to='/landPage' className='bg-ivory shadow animate-pulse rounded-full px-6 py-3 my-4 text-brown drop-shadow w-1/2 flex items-center justify-center'>
                                    <button className='flex items-center'>
                                        <span className='capitalize text-lg font-mono'>{item?.link}</span>
                                        <FaArrowRightLong className='mt-1 ml-3' size={20}/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </Fade>
    </div>
  )
}
