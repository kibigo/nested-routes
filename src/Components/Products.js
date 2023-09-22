import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div className='products'>
        <input type='search' placeholder='search product'/>
    </div>
    
    <nav className='product'>
        <Link to='featuredproducts'>Featured</Link>
        <Link to='newproducts'>New Added</Link>
    </nav>
    <Outlet />
  
    </>
  )
}

export default Products
