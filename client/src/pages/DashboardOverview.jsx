import React, { useEffect, useState } from 'react'
import { Loader } from '../component/Loader'
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { UsersTotal, deleteUser, getUsers } from '../redux/features/user/userAction';
import { getTotalProduct } from '../redux/features/product/productAction';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { NavLink} from 'react-router-dom';



export const HomeDashboard = () => {
    
    const product = useSelector(state => state.products)
    const {isError,errMessage, isLoading, isSuccess, userInfo, data} = useSelector(state => state.user)
    // console.log(userInfo)

    const dispatch = useDispatch()


 
    useEffect(() => {
        dispatch(getTotalProduct())
        dispatch(UsersTotal())        
        dispatch(getUsers())     
    }, [])


    

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
                    userInfo?.map((user) => {
                        return (
                            <Users key={user._id} user={user} />
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


export const Users = ({user}) => {
    const [open, setOpen] = useState(false);
    const {_id, profilePicture, username, email, role} = user
    const dispatch = useDispatch()


    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleDelete = (user) => {
        dispatch(deleteUser(user))
    }

    return(
        <div className=''>
            <div className='md:h-20 w-full my-4 '>
                <div className='h-full flex flex-wrap sm:justify-between justify-around items-center space-x-4 bg-white md:px-5 p-3 md:mx-5 rounded shadow'>
                    <p className='flex items-center space-x-2'>
                        <span>
                            <img src={profilePicture} alt="image" className='w-10 h-10' />
                        </span>
                        <p className='text-center'>
                            <span className='font-bold'>Name:</span>
                            <p>{username}</p>
                        </p>
                    </p>
                    <p className='text-center'>
                        <span className='font-bold'>Email:</span>
                        <p>{email}</p>
                    </p>
                    <p className='text-center'>
                        <span className='font-bold'>Role:</span>
                        <p>{role}</p>
                    </p>
                    <div className='text-center space-x-4 p-3'>
                        <button onClick={()=> onOpenModal(user)} className='text-red'>Delete</button>
                        <Modal open={open} 
                                center 
                                onClose={onCloseModal}
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
                                        <h1 className='text-2xl font-bold p-2'>You want to delete {username}?</h1>
                                        <p className='p-2'>You won't be able to revert this!</p>
                                        <p className='py-4 gap-4 flex text-ivory'>
                                            <button onClick={onCloseModal} className='p-3 bg-red rounded-full sm:hover:shadow-xl md:hover:font-bold'>Cancel</button>
                                            <button onClick={()=> handleDelete(user)}  className='p-3 bg-lightBrown rounded-full md:hover:shadow-xl md:hover:font-bold'>Yes, Delete!</button>
                                        </p>
                                    </div>
                                </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div> 
    )

}