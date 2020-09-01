import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <footer className="footer-section">
      <div className="footer-mask">
      <div className="container">
        <div className="row">
          <div className="footer-container">
            <img src={require('../Images/footer-logo.png')} alt="footer-logo"/>
            <div className="footer-nav-menu">
              <nav>
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Co-Ownership</Link>
                  </li>
                  <li>
                    <Link to="">Stable</Link>
                  </li>
                  <li>
                    <Link to="">Media</Link>
                  </li>
                  <li>
                    <Link to="">Events</Link>
                  </li>
                  <li>
                    <Link to="">Contact</Link>
                  </li>
                  <li>
                    <Link to="">Privacy Policy</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-social-icons">
                <ul>
                  <li><FontAwesomeIcon icon={faFacebookF} className="socail-icons"/></li>
                  <li><FontAwesomeIcon icon={faTwitter} className="socail-icons"/></li>
                  <li><FontAwesomeIcon icon={faInstagram} className="socail-icons"/></li>
                  <li><FontAwesomeIcon icon={faLinkedin} className="socail-icons"/></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
    <div className="footer-copyright">
        Copyright © 2020 Ultima Racing Stable
    </div>
    </div>
    );
  }
}

export default Footer;