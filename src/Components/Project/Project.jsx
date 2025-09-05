import React from 'react';
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icons you need
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const Project = () => {
  return (
    <div id="project" className='projects'>
        <div className="project-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="project-container">
            {mywork_data.map((work, index) => {
                return (
                    <div key={index} className="project-item">
                        <img src={work.w_img} alt="" />
                        <div className="project-overlay">
                          <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faGithub} className="project-icon" />
                          </a>
                          <a href={work.live_link} target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-icon" />
                          </a>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default Project;