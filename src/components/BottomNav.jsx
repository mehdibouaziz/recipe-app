import React from 'react'
import { FaUser, FaBook, FaPlusSquare } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'


const BottomNav = () => {
    const path = useLocation().pathname
    const active = "active text-primary"

  return (
    <div className="btm-nav font-content flex sm:hidden">
        <Link to='/profile' className={/\/(profile|sign)/.test(path) ? active : ''}>
            <FaUser className='text-base' />
            <p className='text-xs'>PROFILE</p>
        </Link>
        <Link to='/' className={/(\/$|\/recipe)/.test(path) ? active : ''}>
            <FaBook />
            <p className='text-xs'>RECIPES</p>
        </Link>
        <Link to='/add-new' className={/\/add-new/.test(path) ? active : ''}>
            <FaPlusSquare />
            <p className='text-xs'>ADD NEW</p>
        </Link>
    </div>
  )
}

export default BottomNav