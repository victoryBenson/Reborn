import React, { useEffect, useState } from 'react'
import { Loader } from '../component/Loader'
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { UsersTotal, getUsers } from '../redux/features/user/userAction';
import { getTotalProduct } from '../redux/features/product/productAction';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { NavLink } from 'react-router-dom';

export const HomeDashboard = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const {isLoading, isError, isSuccess, userInfo, errMessage, data} = useSelector(state => state.user)
    const product = useSelector(state => state.product)
    // console.log(data)

    useEffect(() => {
      dispatch(getUsers())
      dispatch(UsersTotal())
      dispatch(getTotalProduct())        
    }, [])

    

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleDelete = () => {
        
    }
    

    if(isLoading) return <div className='flex justify-center h-screen w-full'><Loader/></div>
    if(isError) return <div className='flex justify-center'>Error:{errMessage}</div>
    
  return (
    <section className='max md:w-full mx-2 shadow'>
        <div className='flex flex-wrap justify-evenly items-center py-5 space-y-4'>
            <NavLink to={`/dashboard/products`}>
                <div className=' bg-lightBrown shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory'>
                    <p>({product.data})</p>
                    <p className='flex items-center'><BsCartCheck/>Available Products</p>
                </div>
            </NavLink>
            <div className=' bg-blue text-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <p>({data})</p>
                <p className='flex items-center'><FaUsersViewfinder />Registered Users</p>
            </div>
            <div className=' bg-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <span>(199)</span>
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
                                <div className='h-full flex flex-wrap sm:justify-between justify-around items-center space-x-4 bg-white md:px-5 p-3 md:mx-5 rounded shadow'>
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
                                    <p className='text-center space-x-4 p-3'>
                                        <button onClick={onOpenModal} className='text-red'>Delete</button>
                                        <Modal open={open} 
                                            onClose={onCloseModal} center 
                                            classNames={{
                                                overlay: 'bg-black/10 customOverlay ', 
                                                modal: ' md:w-1/3 w-5/6 mx-auto h-1/3 no-scrollbar transition-all shadow rounded-xl ',
                                                overlayAnimationIn: 'customEnterOverlayAnimation',
                                                overlayAnimationOut: 'customLeaveOverlayAnimation',
                                                modalAnimationIn: 'customEnterModalAnimation',
                                                modalAnimationOut: 'customLeaveModalAnimation',
                                                }}
                                                animationDuration={100}
                                                >
                                                    <div className='flex items-center justify-center h-full w-full'>
                                                    <div className='flex-col flex justify-center items-center '>
                                                        <h1 className='text-2xl font-bold p-2'>Are you Sure?</h1>
                                                        <p className='p-2'>You won't be able to revert this!</p>
                                                        <p className='py-4 gap-4 flex text-ivory'>
                                                            <button className='p-3 bg-red rounded-full hover:shadow-xl hover:font-bold'>Cancel</button>
                                                            <button className='p-3 bg-lightBrown rounded-full hover:shadow-xl hover:font-bold'>Yes, Delete!</button>
                                                        </p>
                                                    </div>
                                                    </div>
                                        </Modal>
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
