import React, { useState } from 'react'
import "aos/dist/aos.css"
import { BsCartCheck, BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
// import { truncateString } from '../utils';
import { FaArrowLeftLong} from "react-icons/fa6";
import { decreaseCart, increaseCart, removeCart} from '../redux/features/cartSlide';
import { PiCurrencyNgn } from "react-icons/pi";
import { FiMinus} from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { PayButton } from '../component/PayButton';

export const MyCart = () => {
    const {cartItems, cartTotalQuantity, cartTotalAmount} = useSelector(state => state.cart)
    console.log(cartTotalQuantity)
    const dispatch = useDispatch();
       
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div className='md:flex justify-between block md:mx-10 mx-4  md:space-x-4 lg:space-x-12 '>
        <div className='w-full'>
            <div className='sticky top-20 bg-ivory border-b border-gray/1 py-4 flex items-center justify-between'>
                <p className='p-2 flex items-center font-bold text-lg'>
                    <BsCartCheck/>
                    <span className='pl-1'>
                        Shopping Bag
                        ({cartTotalQuantity})
                    </span>
                </p>
            </div>
            { !cartItems.length ? (
                <div className='flex flex-col h-[100vh] justify-center items-center font-bold mt-5'>
                    <p className='text-xl p-2'>Your cart is currently empty</p>
                    <MdOutlineRemoveShoppingCart className='text-3xl text-green'/>
                </div>
            ): 
                <div className='class'>
                    {cartItems.map((item) => {
                        return (
                            <div key={item._id} className='h-40 p-2 my-4 space-x-2 flex text-sm rounded shadow bg-white'>
                                <div className='h-full flex w-1/2'>
                                    <img src={item?.image[0]} alt="image" className='h-full flex justify-center items-center w-full p-1 object-contain' />
                                </div>
                                <div className='flex flex-col items-start justify-center w-full px-1'>
                                    <p className={`p-3 md:text-[1rem] overflow-auto sm:overflow-hidden`}>{item?.name}</p>
                                    <div className='flex items-center justify-between w-full py-2'>
                                        <p className='flex text-lg items-center'>
                                            <PiCurrencyNgn className='mt-1'/>
                                            {item.price?.toLocaleString()}
                                        </p>
                                        <p onClick={()=> dispatch(removeCart(item._id))} className='hover:opacity-70 cursor-pointer bg-red text-ivory flex items-center justify-center p-1 rounded shadow'>
                                            <BsTrash3/> 
                                            <span className='sm: flex'>REMOVE</span>
                                        </p>
                                    </div>
                                    <p className='py-1 rounded-lg flex justify-start items-center text-sm m-2 sm:w-32 w-28 '>
                                        <FiMinus onClick={() => dispatch(decreaseCart(item._id))} className='cursor-pointer hover:opacity-70 transition-all'/>
                                        <span className='font-bold mx-4'>{item.cartQuantity}</span>
                                        <AiOutlinePlus onClick={() => dispatch(increaseCart(item._id))} className='cursor-pointer hover:opacity-70 transition-all'/>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
        <div className='md:mt-10'>
            <div className=' md:w-[30vw] rounded-lg py-4 shadow uppercase bg-white sticky top-20'>
                <p className='border-b border-gray-light p-2 py-5 font-bold'>Cart Summary</p>
                <div className='items-center cursor-pointer justify-between mx-2 py-5 my-1'>
                    <p className='flex flex-wrap justify-between items-center'>
                        <span className='flex items-center'>
                            item total:
                        </span>
                        <span className='flex items-center ml-2 font-bold text-lg'>
                            <PiCurrencyNgn className='mt-1'/>
                            {cartTotalAmount.toLocaleString()}
                        </span>
                    </p>
                    <p className='flex flex-wrap justify-between items-center'>
                        <span className='flex items-center'>
                            delivery fee:
                        </span>
                        <span className='flex items-center ml-2 font-bold text-lg'>
                            <PiCurrencyNgn className='mt-1'/>0.00
                        </span>
                    </p>
                </div>
                <div className='mx-4'>
                     {/* <PayButton email={email} amount={amount} /> */}
                </div>
                <Link to={`/`} className='flex items-center lowercase p-3 text-xl mx-4 opacity-70 hover:opacity-80'>
                    <FaArrowLeftLong className='mt-2 mx-1'/>
                    continue shopping
                </Link>
            </div>
        </div>
    </div>
  )
}
