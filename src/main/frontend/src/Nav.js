import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
      <nav>
        <ul className="nav-links">
            <Link style = {navStyle} to='/' >
                <li>Home</li>
            </Link>
            <Link style = {navStyle} to='/roller-coasters' >
                <li>Roller Coasters</li>
            </Link>
            <Link style = {navStyle} to='/amusement-parks'>
                <li>Amusement Parks</li>
            </Link>
        </ul>
      </nav>
    );
  }

  export default Nav