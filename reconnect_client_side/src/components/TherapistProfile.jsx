import React from 'react';
import { withRouter } from 'react-router';
import UserHeader from './UserProfileComponents/UserHeader';
import { Link } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import ContactMe from './ContactMe';
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
          <button className="schedule-btt-therapist-profile" onClick={(props) => getInfoAppointment()}> Schedule an Appointment </button>
        </div>
        <div id="contactme">
          <ContactMe />
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
      <div className="bottom-therapist-profile">
        <div className="icon-text">
          <img className="icon-therapist-profile" src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png" id="bio-icon" alt="bio-icon"/>
          <p id="title-therapist">Bio:</p>
        </div>

        <div>
          <p id="therapist-info">{therapist.bio}</p>
        </div>

        <div className="icon-text">
          <img className="icon-therapist-profile" src="https://whatsyouredge.com.au/wp-content/uploads/2017/03/SPECIALTY-PROGRAMS-icon.png" id="specialty-icon" alt="specialty-icon" />
          <p id="title-therapist">Specialty:</p>
        </div>

        <div>
          <p id="therapist-info">{therapist.specialty}</p>
        </div>

        <div className="icon-text">
          <img className="icon-therapist-profile" src="http://ncjustice.info/wp-content/uploads/2018/12/NCJC-icons-EDUCATION.png" id="" alt="edu-icon"/>
          <p id="title-therapist">Education:</p>
        </div>

        <div>
          <p id="therapist-info">{therapist.education}</p>
        </div>
      </div>
    </div>
  )
}
export default withRouter(TherapistProfile);
