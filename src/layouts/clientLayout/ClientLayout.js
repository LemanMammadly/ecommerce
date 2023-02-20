import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import FreeShipping from '../../components/FreeShipping/FreeShipping'
import Header from '../../components/Header/Header'


const ClientLayout = () => {
  return (
    <div>
      <FreeShipping/>
      <Header/>
        <div>
            <Outlet/>
        </div>
      <Footer/>  
    </div>
  )
}

export default ClientLayout