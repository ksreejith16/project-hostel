import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import './Rootlayout.css'
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div className='one'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Rootlayout