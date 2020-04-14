import React from 'react';
import AppointmentList from './AppointmentList';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserHeader from './UserProfileComponents/UserHeader';
import AppointmentForm from './AppointmentForm';


function UserProfile(props){
  return(
    <div>
      <UserHeader handleRedirect={props.handleRedirect} />
     <div id="forest-bg">
      <div className="AppointmentList">
        <AppointmentList
        appointments={props.appointments}
        cancelAppointment={props.cancelAppointment}
        date={props.date}
        time={props.time}
        populateForm={props.populateForm}
        modalAppointment={props.modalAppointment}
        rescheduleAppointment={props.rescheduleAppointment}
        handleChange={props.handleChange}/>
      </div>
    </div>
  </div>
)}

export default withRouter(UserProfile);
