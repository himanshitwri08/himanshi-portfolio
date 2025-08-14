import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className='hero'>
     <img src={profile} alt="Profile" />
     <h1><span>I'm Himanshi Tiwari</span>, frontend developer</h1>
     <p>I will be writing something here</p>
     <div className="hero-action">
      <div className="hero-connect"><AnchorLink className="anchor-link" href="#contact" onClick={()=> setMenu("#contact")}>Connect with me</AnchorLink></div>
      <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero
