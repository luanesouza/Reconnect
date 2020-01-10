import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import {Container} from './styles'
import CalendarComponent from './Calendar'
import Diary from './Diary'
import FourOhFour from '../FourOhFour'


export default function Profile() {

  return(
    <Container>
      <NavBar />
      <Switch>
        <Route path={'/diary'} component={Diary}/>
        <Route path={'*'} component={FourOhFour} />
      </Switch>
    </Container>
  )
}
