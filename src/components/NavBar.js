import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../App.css'

function Navbar() {
  return (
    <nav className='nav'>
      <h3 className='heading' >Chakula App </h3>
      <div className='nav-links-wrap'>
            <NavLink className='nav-links' to='/'>Home</NavLink>
            <NavLink className='nav-links' to='/about'>About</NavLink>
            <NavLink className='nav-links' to='/contact'>Contact</NavLink>
      </div>

    </nav>
  )
}

export default Navbar