import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
const Project = () => {
  return (
    <div id="project"className='projects'>
       <div className="project-title">
          <h1>My Projects</h1>
          <img src={theme_pattern} alt="theme_pattern" />
       </div>
       <div className="project-container">
          {mywork_data.map((work,index) => {
            return <img key={index} src={work.w_img} alt=""/>
          })}
       </div>
       
    </div>
  )
}

export default Project
