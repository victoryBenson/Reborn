import React from 'react'
import { CategoryMenu } from '../component/CategoryMenu'
import { Outlet } from 'react-router-dom'

export const Categories = () => {
  return (
    <div>
        <CategoryMenu/>
        <Outlet/>
    </div>
  )
}
