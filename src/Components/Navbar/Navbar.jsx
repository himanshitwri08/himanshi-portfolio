import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import nav_underline from '../../assets/nav_underline.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {  
 
  const [menu,setMenu]=useState("home");
  const menuRef = React.useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
      <p>Himanshi<span>.</span></p>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
        <li><AnchorLink className="anchor-link" href="#home" onClick={()=> setMenu("home")}><p>Home</p> {menu==="home"?<img src={nav_underline} alt=" " />:<></>} </AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#about" onClick={()=> setMenu("about")}><p>About Me</p> {menu==="about"?<img src={nav_underline} alt=" " />:<></>} </AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#project" onClick={()=> setMenu("projects")}><p>Projects</p> {menu==="projects"?<img src={nav_underline} alt=" " />:<></>} </AnchorLink></li>
        <li><AnchorLink className="anchor-link" href="#contact" onClick={()=> setMenu("contact")}><p>Contact</p> {menu==="contact"?<img src={nav_underline} alt=" " />:<></>} </AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" href="#contact" onClick={()=> setMenu("#contact")}>Connect with me </AnchorLink></div>
    </div>
  )
}

export default Navbar
