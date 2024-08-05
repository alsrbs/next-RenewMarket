'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import NavItem from './NavItem';

const Navbar = () => {
  const [meun, setMenu] = useState(false);

  const handleMenu = () => {

  }

  return (
    <nav className='relative z-10 w-full bg-orange-500 text-white'>
      <div className='flex item-center justify-between mx-5 sm:mx-10 lg:mx-20'>

        <div className='flex items-center text-2xl h-14'>
          <Link href="/">Logo</Link>
        </div>

        <div className='text-2xl sm:hidden'>
          {meun === false ? 
          <button onClick={handleMenu}>+</button> : 
          <button onClick={handleMenu}>-</button>}
        </div>

        <div className='hidden sm:block'>
          <NavItem />
        </div>

      </div>

      <div className='block sm:hidden'>
        {meun === false ? null : <NavItem mobile />}
      </div>
    </nav>
  )
}

export default Navbar
