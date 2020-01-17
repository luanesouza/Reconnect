import React from 'react'
import { LoginFormSection, SignupFormSection } from './styles'

export default class UserLoginForm extends React.Component {
  state = {
    signupName: '',
    signupEmail: '',
    signupPassword: '',
    email: '',
    password: '',

  }

  render() {

    const handleChange = (evt) => {
      console.log(evt);
      const {name, value} = evt.target
      this.setState ({
        [name]:value
      })
    }

    const handleLoginSubmit = (e) => {
      e.preventDefault()
      console.log(this.state);
    }

    const handleSignupSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.signupObj);
    }


    const loginOrSignup = () => {


    }

    return (
      <div class='user-forms'>
        <LoginFormSection>
          <form onSubmit={this.loginOrSignup}>
            <input onChange={(e) => handleChange(e)} name='email' type='text' value={this.state.loginObj} placeholder='email' autoComplete="off"/>
            <input onChange={(e) => handleChange(e)} name='password' type='text' value={this.state.loginObj} placeholder='password' autoComplete="off"/>
            <button id='login-button' onClick={(e) => handleLoginSubmit(e)}>Login</button>
          </form>
        </LoginFormSection>

        <SignupFormSection>
          <img src='https://www.graphicsprings.com/filestorage/stencils/3c0d59eba085b4c25dba55b6f5afdf6d.png?width=500&height=500'/>
          <form>
            <input type='text' value={this.state.signupName} placeholder='signupName' autoComplete="off"/>
            <input type='text' value={this.state.signupEmail} placeholder='signupEmail' autoComplete="off"/>
            <input type='text' value={this.state.signupPassword} placeholder='signupPassword' autoComplete="off"/>
            <button onClick={(e) => handleSignupSubmit(e)}>Join Us</button>
          </form>
        </SignupFormSection>
      </div>
    )
  }
}
