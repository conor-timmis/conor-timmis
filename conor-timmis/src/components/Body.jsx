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
        <h2>I'M A <span className="sparkles">FULL STACK</span> DEVELOPER</h2>
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
        <h2><span>About Me</span></h2>
        <p>My first encounter with how the web works was back in 2011 during my high school IT lessons, where I often experimented with changing the HTML and CSS of pages like Google with devtools, though I had no clue what that was exactly. I was regularly told to stop playing with the "inspect element tools" by my teacher, and would frequently ask me what I was trying to achieve, without a real answer and not knowing what I was looking at, I gave him a blank look every time. I enjoyed watching how my edits could alter the site’s appearance. At the time, I had no idea this curiosity would turn into a lasting passion.</p>

        <p>In late 2014, during my College Level 2 Diploma, we touched briefly on coding, and even though it was very basic (HTML & CSS), it captured my interest. Once I finished my Level 3 Diploma 2 years later, my enthusiasm for coding grew, and over the next few years, I pursued it as a hobby. I created small projects, personal homepages, showcases, and even a florist website for my Auntie around mid 2020.</p>

        <p>Fast forward to late 2021, I was considering a career change. I took a very basic free course in coding, but at the time, I didn’t pursue it further once it was completed, as it felt like I still didn't know enough with what I had learned from it.</p>

        <p>In late 2023, a friend recommended <a href="https://codeinstitute.net/" target="_blank" rel="noopener noreferrer" className="orange-link">Code Institute</a>'s Full Stack Software Development course. I was ready for a new direction, having spent years in various entry-level roles, and I realized I needed to seize the opportunity to build a more fulfilling career. I started my course in October 2023, and have finished as of October 2024.</p>

      </section>
      <section id="experience" className="section">
        <h2><span>My Experience</span></h2>
        <div className="glow-border">
          <h4>Full Stack Software Development Diploma</h4>
          <h6>October, 2023 - October, 2024</h6>
          <p>In October 2023, I decided that I would like to take action and find my way into the Tech world. My friend had taken <a href="https://codeinstitute.net/" target="_blank" rel="noopener noreferrer" className="orange-link">Code Institute</a>'s Full Stack Software Development course, and I wanted to have my own go at it. I finally plucked up the courage and signed up for the course, and it is now finished as of October 2024. I learned an absolute ton from this course, and it was both an amazing experience to deal with so much at once and also very much a struggle, which is a good mix. To see everything I've learned, feel free to take a look at my <a href="https://github.com/conor-timmis/" target="_blank" rel="noopener noreferrer" className="header">Github</a> profile here!</p>
        </div>
        <div className="glow-border">
          <h4>Level 2 & 3 IT Diploma</h4>
          <h6>September, 2014 - July, 2017</h6>
          <p>In September 2014, I enrolled in an IT program at my local college to explore the vast world of technology, which has always been my primary interest. The course had a broad focus, covering a variety of modules. We learned about the construction and functionality of PCs, dabbled in basic web development, ventured into game development using the Phaser engine, and even delved into the mathematical principles behind how GPUs operate within computers.</p>
        </div>
      </section>
      <section id="projects" className="section">
        <h2><span>My Projects</span></h2>
        <p></p>
      </section>
    </div>
  );
};

export default Body;
