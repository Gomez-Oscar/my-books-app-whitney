import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import FooterPages from '../footerPages/footerPages'

const Layout = () => {
  return (
      <div>
          <Navbar/>
          <Outlet />
          <FooterPages/>
    </div>
  )
}

export default Layout