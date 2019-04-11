import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {
  return(

    <div>
      <Header />
      <div className="hero-img">
      <div className="shade-over-hero-img">
        <p className="welcome-p">
          It's up to you today to start making healthy choices.
          <br/>
          Not choices that are just healthy for your body, <br/>but healthy for your mind.
          <br/>
          Join <span> Reconnect.</span> <br/>
          An easy way to reconnect with yourself <br/> by connecting with someone who understands you.
          <br/>
          You may have to fight a battle more than once,
          <br/>but you don’t have to fight them alone.
        </p>
        <div className="RegisterForm">
          <h1 className="register-h1">REGISTER</h1>

           <form onSubmit={props.onSubmit}>
           <div>
              <input
              className="register-input"
              placeholder="NAME"
              autoComplete="off"
              type="text"
              onChange={props.handleChange}
              id="first_name"
              name="user_first_name"
              value={props.first_name} />
            </div>

            <div>
              <input
              className="register-input"
              placeholder="LAST NAME"
              autoComplete="off"
              type="text"
              onChange={props.handleChange}
              id="last_name"
              name="user_last_name"
              value={props.last_name} />
            </div>

            <div>
              <input
              className="register-input"
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
              className="register-input"
              placeholder="PASSWORD"
              autoComplete="off"
              type="password"
              onChange={props.handleChange}
              id="password"
              name="password"
              value={props.password} />
            </div>

            <button
            className="register-button"
            onClick={props.handleSubmit}
            type="submit">
            Sign Up
            </button>
           </form>
           <button onClick={props.closeModal} className="already-have-account"> Already Have An Account? </button>
        </div>
      </div>
    </div>
  </div>
  )
};

export default RegisterForm;
