import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navs'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default Navbar
