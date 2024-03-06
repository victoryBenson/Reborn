import React, { useEffect } from 'react'
import { Loader } from '../component/Loader'
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
// import { useFetchUsersCountQuery, useFetchUsersQuery } from '../redux/features/product/generalApi';
import { useDispatch, useSelector } from 'react-redux';
import { UsersTotal, getUsers } from '../redux/features/user/userAction';

export const HomeDashboard = () => {
    const dispatch = useDispatch()
    const {isLoading, isError, isSuccess, userInfo, errMessage, data} = useSelector(state => state.user)
    // const USERS = useSelector(state => state.user.userInfo)
    // const result = Object.values(USERS);
    
    // console.log(userInfo)
    // const {data = [], error, isLoading, isError} = useFetchUsersQuery()
    // const {data = [], error, isLoading, isError} = useFetchUsersCountQuery()

    useEffect(() => {
      dispatch(getUsers())
      dispatch(UsersTotal())        
    }, [])
    

    if(isLoading) return <div className='flex justify-center'><Loader/></div>
    if(isError) return <div className='flex justify-center'>Error:{errMessage}</div>
    
  return (
    <section className='max md:w-full mx-2 shadow'>
        <div className='flex flex-wrap justify-evenly items-center py-5 space-y-4'>
            <div className=' bg-lightBrown shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory'>
                <p>{data}</p>
                <p className='flex items-center'><BsCartCheck/>Products</p>
            </div>
            <div className=' bg-blue text-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <p>{data}</p>
                <p className='flex items-center'><FaUsersViewfinder />Registered Users</p>
            </div>
            <div className=' bg-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <span>199</span>
                <p className='flex items-center'><MdOutlineSell/>Orders</p>
            </div>
        </div>
        <div>
            <h1 className='p-2 font-bold text-2xl'>Registered Users</h1>
            <div className=''>
                {
                    userInfo.map((user) => {
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
                                        <p>{user?.createdAt?.toString()}</p>
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
