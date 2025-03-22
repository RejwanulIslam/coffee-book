import React from 'react'
import Navbar from '../compoment/Navbar'
import Footer from '../compoment/Footer'
import { Outlet } from 'react-router-dom'


export default function Mainlawout() {
  return (
    <div>
        <Navbar></Navbar>

        <div className='min-h-80 max-w-[1100px] mx-auto'>
          
            <Outlet></Outlet>
        </div>

        <Footer></Footer>
    </div>
  )
}
