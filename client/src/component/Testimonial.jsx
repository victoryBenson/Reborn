import React from 'react'
import { testimonials } from './database/testimonialData'

export const Testimonial = () => {
  return (
    <div>
        <div className='text-center p-8'>
            <h1 className='font-bold p-2 text-3xl'>Good news from far away 🥇</h1>
            <p text-lg p-3>Let's see what people think of Reborn</p>
        </div>
        <div className='flex w-full justify-center '>
            <div className='w-full mx-2 lg:flex space-x-2 justify-center items-center overflow-x-auto no-scrollbar'>
                {
                    testimonials.map((data)=> {
                        return(
                            <div key={data.id} className='rounded shadow h-72 my-2'>
                                <p className='flex justify-end '>
                                    <span className='h-28 w-40 '>
                                        <img className='h-full w-full object-cover object-top rounded-bl-full rounded-tr-sm' src={data.image} alt="image" />
                                    </span>
                                </p>
                                <div className=' p-2 m2 rounded '>
                                    <p className='sm:text-3xl text-lg text-gray'>"...{data.description}"</p>
                                    <p className='pt-2 font-bold text text-lg'>{data.name}</p>
                                    <p className='capitalize'>{data.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
