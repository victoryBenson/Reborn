import React from 'react'
import { DashboardMenu } from '../component/DashboardMenu'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='md:flex w-full'>
        <DashboardMenu/>
        <Outlet/>
    </div>
  )
}
