import React, {useEffect} from 'react'
import {FaTwitter, FaFacebookF, FaInstagram,FaWhatsapp} from 'react-icons/fa'
import {LuPhoneCall} from 'react-icons/lu'
import { Logo } from './Logo'
import AOS from 'aos'
import "aos/dist/aos.css"

export const Footer = () => {

    useEffect(() => {
        AOS.init({
          duration: 500
        })    
    },[])

  return (
    <div data-aos="fade-up" className=' text-ivory bg-brown h-auto md:flex items-center sm:p-5 p-3'>
        <div className='md:w-1/2'>
            <div className='p-2'>
                <Logo/>
            </div>
            <p className='p-1 sm:p-4 text-lg '>Welcome to <strong className='font-[800] text-ivory'>Reborn</strong>!
                We aim to offer our customers a variety of the latest products. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.
            </p>
            <div className='flex md:space-x-2'>
                <div className='sm:flex flex-col items-start justify-center '>
                    <h1 className='font-bold p-2 text-xl'>Social Media</h1>
                    <div className='flex flex-wrap space-x-'>
                        <p className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaTwitter size={20}/>
                        </p>
                        <p className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaFacebookF size={20}/>
                        </p>
                        <p className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaInstagram size={20}/>
                        </p>
                        <p className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaWhatsapp size={20}/>
                        </p>
                    </div>
                </div>
                <div className=' md:flex flex-col items-start justify-center p-2 '>
                    <h1 className='text-lg font-bold flex items-center'>
                        <LuPhoneCall className='mx-1'/>
                        Contact us today!
                    </h1>
                    <h3 className='text-white text-xl p-2'>
                        +234-8136878980
                    </h3>
                </div>
            </div>
        </div>
        <div className=' items-center justify-between md:w-1/2 sm:m-3 md:mb-0'>
            <div className='bg-lightBrown shadow-md rounded-lg sm:p-4 p-2'>
                <h1 className='font-bold text-3xl p-2 drop-shadow text-ivory'>Don't wanna miss our offers?</h1>
                <h2 className='py-2'>Drop your email address below and start receving the best offers from <strong>Reborn</strong></h2>
                <div>
                    <form className='flex flex-col space-y-2 h-full items-center justify-center m-2 transition-all'>
                        <input type="email" name="search" id="" placeholder='example@gmail.com' className='p-2 w-full rounded outline-none text-[#781d75]'/>
                        <p>
                            <button type="submit" className='border p-2 mx-2 rounded hover:scale-95 translate-x-4 skew-y-3  shadow-lg font-bold'>MALE</button>
                            <button type="submit" className='border p-2 mx-2 rounded hover:scale-95 translate-x-4 skew-y-3  shadow-lg font-bold'>FEMALE</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}