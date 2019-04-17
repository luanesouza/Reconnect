import React from 'react';
import AppointmentList from './AppointmentList';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserHeader from './UserProfileComponents/UserHeader';
import AppointmentForm from './AppointmentForm';
import Diary from './UserProfileComponents/Diary';
import Videos from './UserProfileComponents/Videos';


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
          <div className="DiaryVideo">
             <div id="diaryVideo">
              <Diary />
             </div>
              <div className="ziggeovideos">
              <h1 id="videos-h1">My Journal </h1>
              <Videos />
              </div>
          </div>
         </div>
        </div>
     </div>
)}

export default withRouter(UserProfile);
