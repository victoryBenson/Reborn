import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from './Logo';
import { CiUser, CiViewList } from 'react-icons/ci';
import { MdOutlineDashboardCustomize, MdOutlineVerifiedUser } from 'react-icons/md';
import { GrFormViewHide } from "react-icons/gr";
import { ShowAdmin } from './hiddenLinks';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const DashboardMenu = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <div className='md:w-[26rem] w-full md:min-h-[100vh] shadow transition-all bg-brown text-ivory'>
        <div onClick={handleToggle} className='flex items-center justify-between md:justify-normal text-2xl font-bold border-b py-4 px-2'>
            <MdOutlineDashboardCustomize className='mx-1 md:flex hidden' />
            Dashboard
            <div className='md:hidden transition-all'>
                {
                    toggle ?
                    <IoIosArrowDown />
                    :
                    <IoIosArrowUp />
                }
            </div>
        </div>
        <div className='md:hidden transition-all'>
            {
                toggle && (
                    <div className='py-5 transition-all'>
                        <ShowAdmin>

                            <NavLink 
                                to={'home-dashboard'} 
                                style={
                                    ({isActive}) => {
                                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                                    }} 
                                className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                                    <GrFormViewHide className='mx-1' />
                                    Overview
                            </NavLink>
                            <NavLink 
                                to={'admin-products'} 
                                style={
                                    ({isActive}) => {
                                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                                    }} 
                                className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                                    <CiViewList className='mx-1'/>
                                    Products
                            </NavLink>
                        </ShowAdmin>
                        <NavLink 
                            to={'profile'} 
                            style={
                                ({isActive}) => {
                                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                                }} 
                            className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                                <CiUser className='mx-1'/>
                                Profile
                        </NavLink>
                        <NavLink 
                            to={'orders'} 
                            style={
                                ({isActive}) => {
                                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                                }} 
                            className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                                <CiUser className='mx-1'/>
                                My Orders
                        </NavLink>
                    </div>
                )
            }
        </div>
        <div className='py-5 transition-all hidden md:flex flex-col'>
            <ShowAdmin>

                <NavLink 
                    to={'home-dashboard'} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                        }} 
                    className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                        <GrFormViewHide className='mx-1' />
                        Overview
                </NavLink>
                <NavLink 
                    to={'admin-products'} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                        }} 
                    className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                        <CiViewList className='mx-1'/>
                        Products
                </NavLink>
            </ShowAdmin>
            <NavLink 
                to={'profile'} 
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                    }} 
                className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                    <CiUser className='mx-1'/>
                    Profile
            </NavLink>
            <NavLink 
                to={'orders'} 
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                    }} 
                className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                    <CiUser className='mx-1'/>
                    My Orders
            </NavLink>
        </div>
    </div>
  )
}

