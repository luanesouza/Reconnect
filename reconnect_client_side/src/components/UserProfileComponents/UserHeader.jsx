import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function UserHeader(){
  return(
    <div className="Header">

      <Logo />
      <Link className="login-logout-header" to='/therapists'> Therapists </Link>
      <Link className="login-logout-header" to='/'> Log Out </Link>

    </div>
  )
}

export default UserHeader;
