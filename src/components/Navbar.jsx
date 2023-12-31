import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
<nav>
    <div className="logo">Shopping Cart</div>
    <div className="linkbox">
        <Link to={'/'}>Home Page</Link>
        <Link to={'/cart'}>Cart Page</Link>
    </div>
</nav>
    </div>
  )
}

export default Navbar;