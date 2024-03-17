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
            <NavLink to={`/dashboard/admin-products`}>
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
        <div className='min-h-fit w-full my-4 '>
            <div className='h-full flex justify-between sm:justify-center space-x-2 rounded shadow sm:p-3'>
                <div className='w-[20%] sm:w-[50%] h-[20vh]'>
                    <div className='flex justify-center items-center h-full'>
                        <img src={profilePicture} alt="image" className='w-full h-full object-contain top' />
                    </div>
                </div>
                <div className='w-[80%] sm:w-[50%] h-[20vh] p-2 flex items-center'>
                    <div>
                        <p className='text-center flex items-center space-x-2 '>
                            <span className='font-bold'>Name:</span>
                            <span>{username}</span>
                        </p>
                        <p className='text-center flex items-center space-x-2 '>
                            <span className='font-bold'>Email:</span>
                            <span>{email}</span>
                        </p>
                        <p className='text-center flex items-center space-x-2 '>
                            <span className='font-bold'>Role:</span>
                            <span>{role}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )

}