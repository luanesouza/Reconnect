import React from 'react'
import { LoginFormSection, SignupFormSection } from './styles'

export default class UserLoginForm extends React.Component {
  render() {
    return (
      <div>
        <SignupFormSection>
          <form>
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='password'/>
            <button id='login-button'>Login</button>
          </form>

        </SignupFormSection>

        <LoginFormSection>
        <hr  />
          <img src='https://www.graphicsprings.com/filestorage/stencils/3c0d59eba085b4c25dba55b6f5afdf6d.png?width=500&height=500'/>
          <form>
            <input type='text' placeholder='name'/>
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='password'/>
            <button>Join Us</button>
          </form>

          <p id='join-us'>Not Yet Subscribed? Join Us</p>
        </LoginFormSection>
      </div>
    )
  }
}
