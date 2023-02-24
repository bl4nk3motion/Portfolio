import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Model from '../../images/model.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className="header">
        <div className="model">
          <img src={Model} alt="Model" />
        </div>
        <div className="moreInfo">
          <p>Hi! My name is <strong>Kirk</strong>.</p>
          <article>
            I am a <strong>Web Developer</strong>.
          </article>
          <section className='links'>
            <a href="www.facebook.com" className='facebook'>
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="www.instagram.com" className='instagram'>
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="www.twitter.com" className='twitter'>
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="www.youtube.com" className='youtube'>
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
          </section>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin>
          </script>
          <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin>
          </script>
          <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  )
}

export default Header