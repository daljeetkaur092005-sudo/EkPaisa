import React from 'react'
import Navbar from '../Features/Finance/UI/Components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    
    </div>
  )
}

export default MainLayout