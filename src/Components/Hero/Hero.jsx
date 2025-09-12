import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import resume from '../../assets/Himanshi_Tiwari_Resume.pdf'  // ✅ Resume import
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile} alt="Profile" />
      <h1><span>I'm Himanshi Tiwari</span>, frontend developer</h1>
      <p>Frontend enthusiast passionate about turning ideas into visually appealing, responsive, and impactful web experiences.</p>
      
      <div className="connect-icons">
        <a href="https://www.linkedin.com/in/himanshi-tiwari810" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff", fontSize: "30px" }} />
        </a>

        <a href="https://github.com/himanshitwri08" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#fff", fontSize: "30px", marginLeft: "15px" }} />
        </a>
      </div>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">Connect with me</AnchorLink>
        </div>
        <a 
          className="hero-resume" 
          href={resume} 
          download="Himanshi_Tiwari_Resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
        >
          My resume
        </a>
      </div>
    </div>
  )
}

export default Hero
