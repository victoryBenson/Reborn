import React from 'react'
import { Loader } from '../component/Loader'
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { useFetchUsersQuery } from '../redux/features/product/generalApi';

export const HomeDashboard = () => {
    const {data = [], error, isLoading, isError} = useFetchUsersQuery()
    console.log(data)

    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div className='flex justify-center'>Error:{error}</div>
    
  return (
    <section className='max md:w-full mx-2 shadow'>
        <div className='flex flex-wrap justify-evenly items-center py-5 space-y-4'>
            <div className=' bg-lightBrown shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory'>
                <p>20,394</p>
                <p className='flex items-center'><BsCartCheck/>Products</p>
            </div>
            <div className=' bg-blue text-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <FaUsersViewfinder />
                <p>Over 1 million Users</p>
            </div>
            <div className=' bg-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <span>199</span>
                <p className='flex items-center'><MdOutlineSell/>Orders</p>
            </div>
        </div>
        <div>
            <h1 className='p-2 font-bold text-2xl'>Reistered Users</h1>
            <div className=''>
                {
                    data.map((user) => {
                        return (
                            <div key={user._id} className='md:h-20 w-full my-4 '>
                                <div className='h-full flex flex-wrap justify-between items-center bg-white md:px-5 p-3 md:mx-5 rounded shadow'>
                                    <p className='flex items-center space-x-2'>
                                        <span>
                                            <img src={user.profilePicture} alt="image" className='w-10 h-10' />
                                        </span>
                                        <p className='text-center'>
                                            <span className='font-bold'>Name:</span>
                                            <p>{user.username}</p>
                                        </p>
                                    </p>
                                    <p className='text-center'>
                                        <span className='font-bold'>Email:</span>
                                        <p>{user.email}</p>
                                    </p>
                                    <p className='text-center'>
                                        <span className='font-bold'>Role:</span>
                                        <p>{user.role}</p>
                                    </p>
                                    <p className='text-center'>
                                        <span className='font-bold'>Last Updated:</span>
                                        <p>{user.updatedAt.toString()}</p>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div>
            <h1 className='p-2 font-bold text-2xl'>Orders</h1>
        </div>
    </section>
  )
}
