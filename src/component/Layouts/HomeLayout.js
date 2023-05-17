import React from 'react'
import Dashboard from '../Dashboard'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import '../Dashboard.css'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default HomeLayout