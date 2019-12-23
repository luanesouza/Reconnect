import React from 'react'
import NavBar from './NavBar'
import CalendarComponent from './Calendar'
import {Route, Switch} from 'react-router-dom'
import Diary from './Diary'
import FourOhFour from '../FourOhFour'


export default function Profile() {

  return(
    <>
      <NavBar />
      <Switch>
        <Route path={'/diary'} component={Diary}/>
        <Route path={'*'} component={FourOhFour} />
      </Switch>
    </>
  )
}
