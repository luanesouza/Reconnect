import React, { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function UserHeader(props){
  const [open, isMenuOpen] = useState(false)
  // <button className="redirect-to-therapists" onClick={props.handleRedirect}> Therapists </button>
  // <Link className="login-logout-header" to='/'> Log Out </Link>
  // <Link className="login-logout-header" to='/profile'> <img className="profile-icon" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt="profile-img" /> </Link>
  return(
    <div className="UserHeader">
      <section className="HeaderMobile">
        {
          props.username
          ?
          <h2> Welcome, ${props.username}</h2>
          :
          <h2></h2>
        }

        <button onClick={(e) => {e.preventDefault(); isMenuOpen(!open) }}
          className='menu'>
          <img src='https://image.flaticon.com/icons/svg/2089/2089793.svg' alt='mobile-menu'/>
        </button>
      </section>
      {
        open
        ?
        <section className='dropdown-menu'>
          <p><Link to='/therapists'>View All Therapists </Link></p>
          <p><Link to='/profile'>View Profile </Link></p>
          <p><Link to='/'>Logout </Link></p>
        </section>
        :
        null
      }
    </div>
  )
}

export default UserHeader;
