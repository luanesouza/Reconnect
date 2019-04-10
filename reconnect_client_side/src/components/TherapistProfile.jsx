import React from 'react';
import { withRouter } from 'react-router';
import UserHeader from './UserProfileComponents/UserHeader';
import { Link } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';

function TherapistProfile(props){

  const { therapist, getInfoAppointment } = props
  return(
    <div className="TherapistProfile">
     <UserHeader />
      <div className="top-therapist-profile">
        <img className="therapistImage" src={therapist.therapist_image} alt="therapist_img"/>
        <div>
          <p className="therapist-name">Dr. {therapist.therapist_first_name} {therapist.therapist_last_name} <img className="verified" src="https://png.pngtree.com/svg/20170815/38e536fe9c.png" /></p>
          <p id="title-therapist"> Reviews:
          <img className="star" src ="https://upload.wikimedia.org/wikipedia/commons/e/e7/Star_green_ruby.png" />
          <img className="star" src ="https://upload.wikimedia.org/wikipedia/commons/e/e7/Star_green_ruby.png" />
          <img className="star" src ="https://upload.wikimedia.org/wikipedia/commons/e/e7/Star_green_ruby.png" />
          <img className="star" src ="https://upload.wikimedia.org/wikipedia/commons/e/e7/Star_green_ruby.png" />
          </p>
          <p id="title-therapist">Location:</p>
          <p id="therapist-info">{therapist.location}</p>
          <p id="title-therapist">Contact:</p>
          <p id="therapist-info">Skype: {therapist.therapist_skype}</p>
          <p id="title-therapist">Price:</p>
          <p id="therapist-info">{therapist.price}</p>
          <button onClick={(props) => getInfoAppointment()}> Schedule an Appointment </button>
        </div>
        <div className="modalAppointment">
          <AppointmentForm
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          date={props.date}
          time={props.time}
          handleCalendar={props.handleCalendar}
          modalAppointment={props.modalAppointment}
          />
        </div>
      </div>
      <p id="title-therapist">Bio:</p>
      <p id="therapist-info">{therapist.bio}</p>
      <p id="title-therapist">Specialty:</p>
      <p id="therapist-info">{therapist.specialty}</p>

    </div>
  )
}
export default withRouter(TherapistProfile);
