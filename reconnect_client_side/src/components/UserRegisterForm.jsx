import React from 'react';

export default function UserRegisterForm(props){
  return(
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
        type="submit"
        >
          Sign Up
      </button>

      <button onClick={props.closeModal} className="already-have-account">
        Already Have An Account?
      </button>
    </form>
  )
}
