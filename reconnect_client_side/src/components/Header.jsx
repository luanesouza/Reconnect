import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <div className="Header">
      <Logo />
      <Link className="login-logout-header" to="/login">Sign In</Link>
      <Link className="login-logout-header" to="/">Sign Up</Link>
    </div>
  )
}

export default Header;
