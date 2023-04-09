import React from 'react'
import Navbaroo from '../component/Navbaroo'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbaroo/>
        <Outlet/>
    </div>
  )
}

export default Layout