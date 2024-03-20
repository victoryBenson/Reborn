import React from 'react'
import { testimonials } from './database/testimonialData'

export const Testimonial = () => {
  return (
    <div>
        <div className='text-center p-8'>
            <h1 className='font-bold p-2 sm:text-3xl text-xl'>Good news from far away 🥇</h1>
            <p text-lg p-3>Let's see what people think of Reborn</p>
        </div>
        <div className='flex justify-center overflow-x-auto no-scrollbar'>
            <div className='w-full lg:fle space-y-2 justify-center items-center whitespace-nowrap'>
                {
                    testimonials.map((data)=> {
                        return(
                            <div key={data.id} className='rounded shadow min-h-72 m-4 border border-gray/20'>
                                <p className='flex justify-end '>
                                    <span className='h-28 w-40 '>
                                        <img className='h-full w-full object-cover object-top rounded-bl-full rounded-tr-sm' src={data.image} alt="image" />
                                    </span>
                                </p>
                                <div className=' p-2 m2 rounded sm:w-[90%] text-wrap'>
                                    <p className='sm:text-3xl text-lg text-gray text-wrap'>"...{data.description}"</p>
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
