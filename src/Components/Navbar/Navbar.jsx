import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
const Navbar = () => {  
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Me</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
      </ul>
      <div className="nav-connect">Connect with me </div>
    </div>
  )
}

export default Navbar
