import React from 'react'
import { Outlet } from 'react-router-dom'
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
    </div>
  )
}

export default ClientLayout