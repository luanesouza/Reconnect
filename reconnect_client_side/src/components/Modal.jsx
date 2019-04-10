import React from 'react';

export default (props) => {
  if (props.isOpen === false) {
    return null;
  }

  return (
    <div className="modal">
      <div>
      <div className="LoginForm">
        <button className="closeModal" onClick={props.closeModal}>X</button>
        <h1 className="create-new-account">WELCOME BACK</h1>
         <form onSubmit={props.onSubmit}>
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
            className="login-button"
            onClick={props.handleSubmit}
            type="submit">
            Log In
            </button>
          </form>
      </div>
      </div>
    </div>
  )
}
