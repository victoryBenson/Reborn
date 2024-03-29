import React, { useEffect, useRef, useState } from 'react'
import { testimonials } from './database/testimonialData'
import AOS from 'aos'
import "aos/dist/aos.css"


export const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5000;
    
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

    useEffect(() => {
        AOS.init({
          duration: 500
        })    
    },[])

    return (
    <div data-aos="fade-up" className='flex flex-col justify-center h-full items-center mt-5'>
        <div className='text-center py-4'>
            <h1 className='font-bold sm:text-3xl text-xl'>Good news from far away 🥇</h1>
            <p className='text-lg p-3'>Let's see what people think of Reborn</p>
        </div>
        <div></div>
        <div className='overflow-hidden no-scrollbar slideshow max-w-[100%] sm:max-w-[80%] mx-1 '>
            <div className=' whitespace-nowrap slideshowSlider' style={{transition: "ease-in 100ms"}}>
                {
                    testimonials.map((data)=> {
                        return(
                            <div 
                                key={data.id} 
                                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                                className='inline-block w-full bg-white rounded shadow min-h-full h-80 border border-gray/10 slide '>
                                <p className='flex justify-end '>
                                    <span className='h-28 lg:h-40 w-40 lg:w-48'>
                                        <img className='h-full w-full object-cover object-top rounded-full rounded-tr-sm' src={data.image} alt="image" />
                                    </span>
                                </p>
                                <div className='p-2 rounded text-wrap'>
                                    <p className='sm:text-3xl text-lg text-gray text-wrap'>"...{data.description}"</p>
                                    <p className='pt-2 font-bold text text-lg'>{data.name}</p>
                                    <p className='capitalize'>{data.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center'>
                {
                    testimonials.map((_, idx) => (
                        <div 
                            key={idx}
                            onClick={()=> setIndex(idx)}
                            className={`slideshowDot${index === idx && " active"} space-x-2 rounded-full h-3 w-5 inline-block cursor-pointer bg-gray`}
                        ></div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
