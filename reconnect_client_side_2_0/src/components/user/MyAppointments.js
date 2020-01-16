import React from 'react';
import NavBar from './NavBar'
import { DiaryShowPage } from './styles'
import BackButton from '../BackButton'

function MyAppointments(props){
  return(
    <DiaryShowPage>
      My Appointments
      <BackButton goBack={props.goBack}/>
    </DiaryShowPage>
  )
}

export default MyAppointments;
