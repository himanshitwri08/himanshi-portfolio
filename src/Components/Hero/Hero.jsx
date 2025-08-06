import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
     <img src={profile_img} alt="Profile" />
     <h1><span>I'm Himanshi Tiwari</span>, full stack developer</h1>
     <p>I will be writing something here</p>
     <div className="hero-action">
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero
