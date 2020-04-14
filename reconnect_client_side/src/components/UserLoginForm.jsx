import React from 'react';
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
        id="email"
        name="user_email"
        value='user@gmail.com' />

        <label name='password'> Password </label>

        <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        value='aaaaa'/>

        <button
        id='submitForm'
        onClick={props.handleSubmit}
        type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  )
};

export default UserLoginForm;
