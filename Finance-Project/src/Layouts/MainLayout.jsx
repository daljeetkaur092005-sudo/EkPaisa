import React from 'react'
import Navbar from '../Features/Finance/UI/Components/Navbar'
import { Outlet } from 'react-router'
import ScrollToTop from '../Features/Finance/UI/Components/ScrollToTop'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
           <ScrollToTop />
        <Outlet/>
    
    </div>
  )
}

export default MainLayout