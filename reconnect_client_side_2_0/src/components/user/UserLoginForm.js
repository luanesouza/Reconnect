import React from 'react'
import {FormSection} from './styles'

export default class UserLoginForm extends React.Component {
  render() {
    return (
      <FormSection>
        <h1> Login </h1>
        <form>
          <input type='text' placeholder='email'/>
          <input type='text' placeholder='password'/>
          <button>Login</button>

        </form>
      </FormSection>
    )
  }
}
