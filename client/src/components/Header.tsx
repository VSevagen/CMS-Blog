import React from 'react';
import { Link } from 'react-router-dom';
import DarkToggle from './DarkToggle';

type HeaderPropsType = {
  LoggedIn?: any;
};

const Header = ({ LoggedIn }: HeaderPropsType) => {
  return (
    <div>
      <div className="header">
        <div className="site-title">
          <a id="title" href="/">
            My Blog
          </a>
          <DarkToggle />
          <div className="site-options">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            {LoggedIn ? (
              <Link to="/">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>

      <div className="separator"></div>
    </div>
  );
};

export default Header;
