import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function UserHeader(){
  return(
    <div className="Header">

      <Logo />
      <Link className="login-logout-header" to='/therapists'> Therapists </Link>
      <Link className="login-logout-header" to='/'> Log Out </Link>
      <Link className="login-logout-header" to='/profile'> <img className="profile-icon" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt="profile-img" /> </Link>

    </div>
  )
}

export default UserHeader;
