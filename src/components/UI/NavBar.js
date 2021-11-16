import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav_bar__container">
      <h1>Where in the world?</h1>
      <div>
        <FontAwesomeIcon className="nav_bar__moon" icon={faMoon} />
        <p>dark mode</p>
      </div>
    </div>
  )
};

export default NavBar;