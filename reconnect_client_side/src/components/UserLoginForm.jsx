import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const UserLoginForm = (props) => {
  return(

    <div>
    <Header />
    <div className="LoginForm">
      <h1 className="welcome-back">WELCOME BACK</h1>
       <form onSubmit={props.onSubmit}>
          <div>
            <input
            className="login-input"
            placeholder="EMAIL"
            autoComplete="off"
            type="text"
            onChange={props.handleChange}
            id="email"
            name="user_email"
            value={props.email} />
          </div>

          <div>
            <input
            className="login-input"
            placeholder="PASSWORD"
            autoComplete="off"
            type="password"
            onChange={props.handleChange}
            id="password"
            name="password"
            value={props.password} />
          </div>

          <button
          className="login-button"
          onClick={props.handleSubmit}
          type="submit">
          Log In
          </button>
        </form>
    </div>
  </div>
  )
};

export default UserLoginForm;
