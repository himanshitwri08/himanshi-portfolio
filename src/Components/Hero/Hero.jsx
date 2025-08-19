import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile} alt="Profile" />
      <h1><span>I'm Himanshi Tiwari</span>, frontend developer</h1>
      <p>I will be writing something here</p>
      <div className="connect-icons">
        
        <a href="https://www.linkedin.com/in/himanshi-tiwari810" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff", fontSize: "30px" }} />
        </a>

        <a href="https://github.com/himanshitwri08" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#fff", fontSize: "30px", marginLeft: "15px" }} />
        </a>
      </div>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" href="#contact" onClick={() => setMenu("#contact")}>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
