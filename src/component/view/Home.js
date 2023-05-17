import React from 'react'
import Dashboard from '../Dashboard'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import '../Dashboard.css'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Home