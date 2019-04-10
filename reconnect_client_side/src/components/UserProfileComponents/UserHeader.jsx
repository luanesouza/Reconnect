import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function UserHeader(){
  return(
    <div className="Header">

      <Logo />
      <Link to='/therapists'> Therapists </Link>
      <Link to='/'> Log Out </Link>

    </div>
  )
}

export default UserHeader;
