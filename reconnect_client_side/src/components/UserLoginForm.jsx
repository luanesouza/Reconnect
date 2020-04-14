import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const UserLoginForm = (props) => {
  return(

    <div className="userForm">
       <form onSubmit={props.onSubmit}>
        <h1> Welcome Back </h1>
        <label name='email'> Email </label>

        <input
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="email"
        name="user_email"
        value={props.email} />

        <label name='password'> Password </label>

        <input
        autoComplete="off"
        type="password"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password} />

        <button
        id='submitForm'
        onClick={props.handleSubmit}
        type="submit"
        >
          Log In
        </button>
        <p id='error'>{props.error}</p>
      </form>
    </div>
  )
};

export default UserLoginForm;
