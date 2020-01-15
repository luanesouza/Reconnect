import React from 'react'
import {FormSection} from './styles'

export default class UserLoginForm extends React.Component {
  render() {
    return (
      <FormSection>
        <img src='https://www.graphicsprings.com/filestorage/stencils/3c0d59eba085b4c25dba55b6f5afdf6d.png?width=500&height=500'/>
        <form>
          <input type='text' placeholder='email'/>
          <input type='text' placeholder='password'/>
          <button>Login</button>

        </form>
      </FormSection>
    )
  }
}
