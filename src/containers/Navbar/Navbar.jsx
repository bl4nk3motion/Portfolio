import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="container">
        <nav>
        <div className="logo">
            <a href="/">Portfolio</a>
        </div>
        <div className="contain">
          <div className="home">
            <a href="/">Home</a>
          </div>
          <div className="projects">
            <a href="/Projects">Projects</a>
          </div>
          <div className="aboutUs">
            <a href="/About">About</a>
          </div>
        </div>
        <div className="contactMe">
          <a href="mailto:orellanakirk27@gmail.com">
            <button>Hire Me</button>
          </a>
        </div>
        </nav>
    </div>
  )
}

export default Navbar