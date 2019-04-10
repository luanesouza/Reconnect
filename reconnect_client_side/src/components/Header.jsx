import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div className="Header">
      <Logo />
      <Link to="/login">Sign In</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  )
}

export default Header;
