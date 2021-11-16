import React from 'react';
import '../styles/main.css';
import Twitter from '../public/twitter.png';
import Linkedin from '../public/linkedin.png';
import Github from '../public/github.svg';

export default function Footer() {
  return (
    <div>
      <div className="bottom-separator"></div>

      <div className="footer">
        <div className="link-holder text-center">
          <a
            href="https://github.com/VSevagen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links" src={Github} alt=""></img>
          </a>
          <a
            href="https://twitter.com/SevagenV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links" src={Twitter} alt=""></img>
          </a>
          <a
            href="https://www.linkedin.com/in/veerasamy-sevagen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links" src={Linkedin} alt=""></img>
          </a>
        </div>

        <div className="copyright text-center">
          Copyright © 2020 - Veerasamy S
        </div>
      </div>
    </div>
  );
}
