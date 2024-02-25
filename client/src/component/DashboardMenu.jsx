import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from './Logo';
import { CiUser, CiViewList } from 'react-icons/ci';
import { MdOutlineDashboardCustomize, MdOutlineVerifiedUser } from 'react-icons/md';
import { GrFormViewHide } from "react-icons/gr";
import { ShowAdmin } from './hiddenLinks';

export const DashboardMenu = () => {
  return (
    <div className='md:w-96 w-full md:min-h-[100vh] shadow transition-all'>
        <div className='flex items-center text-2xl font-bold border-b py-4'>
            <MdOutlineDashboardCustomize className='mx-1'/>
            Dashboard
        </div>
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
                    to={'products'} 
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

