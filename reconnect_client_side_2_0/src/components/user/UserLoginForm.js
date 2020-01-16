import React from 'react'
import { LoginFormSection, SignupFormSection } from './styles'

export default class UserLoginForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  render() {

    const handleChange = (evt) => {
      const {name, value} = evt.target
      this.setState ({
        [name]:value
      })
    }

    const handleClick = (e) => {
      e.preventDefault()
    }


    const loginOrSignup = () => {

    }

    return (
      <div class='user-forms'>
        <LoginFormSection>
          <form>
            <input type='text' value={this.state.email} placeholder='email'/>
            <input type='text' value={this.state.password} placeholder='password'/>
            <button id='login-button' onClick={(e) => handleClick(e)}>Login</button>
          </form>
        </LoginFormSection>

        <SignupFormSection>
          <img src='https://www.graphicsprings.com/filestorage/stencils/3c0d59eba085b4c25dba55b6f5afdf6d.png?width=500&height=500'/>
          <form>
            <input type='text' value={this.state.name} placeholder='name'/>
            <input type='text' value={this.state.email} placeholder='email'/>
            <input type='text' value={this.state.password} placeholder='password'/>
            <button onClick={(e) => handleClick(e)}>Join Us</button>
          </form>
        </SignupFormSection>
      </div>
    )
  }
}
