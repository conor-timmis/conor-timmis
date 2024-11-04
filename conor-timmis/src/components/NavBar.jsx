import React from 'react';
import '../styles/NavBar.css';
import BounceButton from './BounceButton';
import TextScramble from './TextScramble';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <TextScramble />
      </div>
      <div className="navbar-links">
        <a href="#about">
          <BounceButton className="navbar-button">About</BounceButton>
        </a>
        <a href="#experience">
          <BounceButton className="navbar-button">Experience</BounceButton>
        </a>
        <a href="#projects">
          <BounceButton className="navbar-button">Projects</BounceButton>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
