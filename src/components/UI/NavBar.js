import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'
import Container from '@mui/material/Container';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav_bar">
      <Container className="nav_bar__container" maxWidth="xl">
        <h1>Where in the world?</h1>
        <div className="nav_bar__dark_mode">
          <FontAwesomeIcon className="nav_bar__moon" icon={farMoon} />
          {/* <FontAwesomeIcon className="nav_bar__moon" icon={fasMoon} /> */}
          <p>Dark Mode</p>
        </div>
      </Container>
    </div>
  )
};

export default NavBar;