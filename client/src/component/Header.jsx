import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { CiUser, CiLogout, CiLogin, CiEdit } from "react-icons/ci";
import { MdCategory, MdSportsTennis } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { RiArrowDownSLine, RiArrowUpSLine, RiLightbulbFlashLine, RiUserFollowLine } from "react-icons/ri";
import { LuHelpCircle, LuSunMoon } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {IoArrowUndoOutline} from 'react-icons/io5';
import AOS from 'aos'
import "aos/dist/aos.css"
import { SocialMedia } from './SocialMedia';
import { BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { ShowCustomer, ShowOnLogin, ShowOnLogout, ShowAdmin } from './hiddenLinks';
import { LogoutUser } from '../redux/features/auth/authActions';
import { Reset_Auth } from '../redux/features/auth/authSlice';
import { LiaToggleOffSolid} from "react-icons/lia";
import { PiShirtFoldedLight } from "react-icons/pi";
import { TbChecklist, TbPerfume } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { AiFillDashboard, AiOutlineDashboard } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";


export const Header = () => {
    const [menu, setMenu] = useState(false)
    const [mobile, setmobile] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const {cartItems, cartTotalQuantity} = useSelector(state => state.cart)
    const {userInfo} = useSelector((state) => state.auth); 
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const clickMobile = ()=> {
        setmobile(!mobile)
    }

    const displayCart = ()=> {
        setShowCart(!showCart)
    }

    useEffect(() => {
        AOS.init({
          duration: 500
        })    
    },[])

    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = showCart? 'hidden' : 'auto';
      }, [showCart]);

    const Logout = async () => {
        await dispatch(LogoutUser())
        await dispatch(Reset_Auth())
        navigate("/login")
    }

  return (
    <div className='flex items-center justify-between bg-blur p-3 px-10 md:px-5 h-20 transition-all bg-gradient-to-l shadow backdrop-blur-lg sticky top-0 z-40'>
        <div>
            <NavLink to={`/`}>
                <Logo/>
            </NavLink>
        </div>
        {/* mobile */}
        <div className='flex flex-cols md:hidden px-3'>
            <HiOutlineMenuAlt2 size={20} onClick={clickMobile} className='cursor-pointer '/>
            {
                mobile && (
                    <div>
                        <div onClick={clickMobile} className='bg-black/70 backdrop-blur fixed top-0 left-0 right-0 h-full w-full transition-all z-10'></div>
                        <div data-aos="fade-right" className='sm:w-2/4 w-full  fixed z-10 shadow-lg left-0 md:-left-0 top-0 h-full duration-500 transition-all'>  
                            <div className='relative bg-white h-full'>
                                <div className='border-b border-gray/10'>
                                    <div className='mx-2 py-4 flex items-center justify-between relative'>
                                        <p className='p-2 flex items-center'>
                                            <Logo/>
                                        </p>
                                        <p onClick={clickMobile} className=' flex items-end justify-end p-2 '><IoArrowUndoOutline size={20} /></p>
                                    </div>
                                    <div>
                                        <p className='text-gray/80 p-4'>Discover the most outstanding articles on all topics of life. Write your stories and share them</p>
                                    </div>
                                    <div className='flex items-center justify-between px-2'>
                                        <SocialMedia/>
                                        <p className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4 bg-gray/20 rounded-full'>
                                            <LuSunMoon className='mx-1'/>
                                        </p>
                                    </div>
                                    <div className='py-3'>
                                        <p className='bg-gra mx-2 p-1 rounded-xl flex items-center border border-gray/10'>
                                            <GoSearch/>
                                            <input type="search" className='w-full p-1 rounded-xl bg-gray/0 outline-none' placeholder='Type your search' />
                                        </p>
                                    </div>
                                </div>
                                <div className='p-5 sm:px-10  px-5 flex flex-col'>
                                    <Link to = '/' className= "text-blue py-2 text-lg hover:underline decoration-blue decoration-2 underline-offset-4" >
                                        Men
                                    </Link>
                                    <Link to = '/' className= "text-blue py-2 text-lg hover:underline decoration-blue decoration-2 underline-offset-4" >
                                        Women                                 
                                    </Link>
                                    <Link to = '/' className= "text-blue py-2 text-lg hover:underline decoration-blue decoration-2 underline-offset-4" >
                                        Beauty
                                    </Link>
                                    <Link to = '/' className= "text-blue py-2 text-lg hover:underline decoration-blue decoration-2 underline-offset-4" >
                                        Sport
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className='flex flex-inline'>
            <Link to='category' className= " flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4" >
                <MdCategory className='mx-1'/>
                Categories
            </Link>
            <ShowCustomer>
                <div className=' p-2 flex'>
                    <Link to = '/dashboard/orders' className= " flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4" >
                        <BiPurchaseTag className='mx-1'/>
                        My Order
                    </Link>
                </div>
            </ShowCustomer>
            <ShowAdmin>
                <div className=' p-2 flex'>
                    <Link to={`/dashboard/home-dashboard`} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                        <AiFillDashboard className='mx-1'/>
                        Dashboard
                    </Link>
                    <Link to={`/dashboard/products`} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                        <GrUpdate className="mx-1"/>
                        Update Products
                    </Link>
                </div>
            </ShowAdmin>
        </div>
        <div className='items-center space-x-2 hidden md:flex'>
            {/* <div className=' px-2 text-xl cursor-pointer hidden mdflex items-center'>
                <input type="search" placeholder='Search products here' className='lg:w-80 w-60 p-2 rounded-l-lg outline-none border border-gray/20' />
                <label htmlFor="search" className='bg-brown text-ivory p-2 rounded-r-lg shadow border border-gray/20'>Search</label>
            </div> */}
            <div className='px-2 relative flex items-center space-x-4'>
                <div onClick={()=> setMenu(!menu)} className='flex items-center cursor-pointer space-x-3 transition-all'>
                    <ShowOnLogout><CiUser className='text-xl'/></ShowOnLogout>
                    <ShowOnLogin><RiUserFollowLine className='text-xl'/></ShowOnLogin>
                    <h1 className='capitalize'>Hi,{userInfo? userInfo.username : 'user'}</h1>
                    { menu? <RiArrowDownSLine/> : <RiArrowUpSLine/> }
                </div>
                <div className='absolute top-10 right-0'>
                    {
                        menu && (
                            <div className='drop-shadow w-60 rounded-xl p-2 bg-white'>
                                <div className='border-b border-gray/20 p-2 flex'>
                                    <p className='rounded-full h-14 w-14 flex items-center justify-center'>
                                        <img src={userInfo? userInfo.profilePicture : `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg`} alt="image" />
                                    </p>
                                    <p className='flex flex-col px-2'>
                                        <span className='font-bold capitalize'>{userInfo? userInfo.username : 'user'}</span>
                                        <span className='font-light'>Nigeria</span>
                                    </p>
                                </div>
                                <ShowCustomer>
                                    <div className='border-b border-gray/20 p-2'>
                                        <Link to={`/dashboard/profile`} className='flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <CiUser className='mx-1'/>
                                            Account
                                        </Link>
                                        <Link to = '/dashboard/orders' className= " flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4" >
                                            <BiPurchaseTag className='mx-1'/>
                                            My Order
                                        </Link>
                                    </div>
                                </ShowCustomer>
                                <ShowAdmin>
                                    <div className='border-b border-gray/20 p-2'>
                                        <Link to={`/dashboard/home-dashboard`} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <CiEdit className='mx-1'/>
                                            Dashboard
                                        </Link>
                                        <Link to={`/dashboard/products`} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <TbChecklist className="mx-1"/>
                                            View Products
                                        </Link>
                                        <Link to={`dashboard/products`} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <RxUpdate className='mx-1'/>
                                            Update Product
                                        </Link>
                                    </div>
                                </ShowAdmin>
                                <div className='p-2'>
                                    <div className='flex items-center justify-between'>
                                        <p className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <RiLightbulbFlashLine className='mx-1'/>
                                            Dark theme
                                        </p>
                                        <p className='flex items-center '>
                                            <LiaToggleOffSolid size={20}/>
                                        </p>
                                    </div>
                                    <p className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                        <LuHelpCircle  className='mx-1'/>
                                        Help
                                    </p>
                                    <ShowOnLogout>
                                        <Link to={`login`} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <CiLogin  className='mt-1 mx-1'/>
                                            Login
                                        </Link>
                                    </ShowOnLogout>
                                    <ShowOnLogin>
                                        <p onClick={Logout} className='flex items-center p-2 cursor-pointer hover:underline underline-offset-4'>
                                            <CiLogout  className='mt-1 mx-1'/>
                                            Logout
                                        </p>
                                    </ShowOnLogin>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <NavLink to="/mycart" className='px-1 text-xl relative cursor-pointer'>
                <p  className='relative' >
                    <BsCartCheck />
                    <span className='absolute -top-3 -right-3 px-1 text-sm bg-blue text-white rounded-full flex item-center justify-center'>
                        {cartTotalQuantity}
                    </span>
                </p>
            </NavLink>
        </div>
    </div>
  )
}
