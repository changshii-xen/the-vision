import React from 'react';
import Protypes from 'prop-types';
import logo from '../images/logo.png'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom'


const Navbar = ({title}) => {
    return (
      <nav className= 'teal'>
        <div class="nav-wrapper">

          <a href="#!" class="brand-logo">{title}</a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    
      
    )
}

Navbar.propTypes ={
    title: Protypes.string.isRequired,
    
}

Navbar.defaultProps ={
    title: 'The Vision | TV1',
}

export default Navbar
