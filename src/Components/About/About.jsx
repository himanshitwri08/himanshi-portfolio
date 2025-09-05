import React from 'react'
import './About.css'
import profile_about from '../../assets/profile_about.png'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>  
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_about} alt="Profile" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
               I am passionate about building responsive and user-friendly web interfaces using React, HTML, CSS, JavaScript, and Tailwind CSS. 
                </p>

                <p>My work focuses on creating clean, accessible, and performant front-end experiences, with attention to detail and modern design principles. I have experience developing reusable components, implementing dynamic UI logic, and optimizing web applications for both desktop and mobile platforms.

                </p>
            </div>
            <div className="about-skills">
                <div className="about-each-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width: "50%"}}></hr>                           
                </div>
                <div className="about-each-skill">
                    <p>React JS</p>
                    <hr style={{width: "60%"}}></hr>
                </div>
                <div className="about-each-skill">
                    <p>JavaScript</p>
                    <hr style={{width: "50%"}}></hr>
                </div>
                <div className="about-each-skill">
                    <p>Tailwind CSS</p>
                    <hr style={{width: "40%"}}></hr>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
