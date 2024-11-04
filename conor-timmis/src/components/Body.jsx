import React from 'react';
import displayImage from '../assets/displayimage.jpg';
import '../styles/Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Body = () => {
  return (
    <div>
      <section id="header" className="section">
      <img src={displayImage} alt="User Picture" className="user-picture" />
        <h1>Hey, I'm <span className="name">Conor</span> 👋</h1>
        <h2>I'M A <span class="sparkles">FULL STACK</span> DEVELOPER</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/conor-timmis" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/conor-timmis" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="mailto:conor.timmis@icloud.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </section>
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section id="experience" className="section">
        <h2>My Experience</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section id="projects" className="section">
        <h2>Projects I've Worked On</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  );
};

export default Body;
