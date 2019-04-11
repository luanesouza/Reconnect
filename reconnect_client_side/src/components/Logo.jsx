import React from 'react';
import { Link } from 'react-router-dom';

function Logo(){
  return(
    <div className="logo-header">
      <Link to='/'>
        <img className="logo" src ="https://lh3.googleusercontent.com/xbO3J8i32nVBqKIKCeY_poHUnLIvkP8_oQP9IlicHzuaqGEDXShqtMYEge7nGgEB5wc=s180" alt="logo"/>
        <p className="reconnectTitle">Reconnect</p>
      </Link>
    </div>
  )
}

export default Logo;
