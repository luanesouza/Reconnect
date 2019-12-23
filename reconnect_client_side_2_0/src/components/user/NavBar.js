import React from 'react';
import { Navigation } from './styles'
import { NavLink, Route } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

function NavBar(){

  return(
    <Navigation>
      <section>
        <NavLink
          to='/diary'
          activeClassName={'activeLink'}
          >
          <img
          src='https://png.pngtree.com/svg/20161117/diary_465766.png'
          alt='logo'
          />
            <p>My Diary</p>
        </NavLink>
      </section>

      <section>
        <NavLink
          to='/appointments'
          activeClassName={'activeLink'}
          >
          <img
          src='https://image.flaticon.com/icons/png/512/508/premium/508867.png'
          alt='logo'
          />
            <p>My Appointments</p>
        </NavLink>
      </section>

      <section>
        <NavLink
          to='/therapists'
          activeClassName={'activeLink'}
          >
          <img
          src='https://cdn.iconscout.com/icon/free/png-512/search-people-1402439-1188457.png'
          alt='logo'
          />
          <p>Browse Therapists </p>
        </NavLink>
      </section>
    </Navigation>
  )
}

export default NavBar;
