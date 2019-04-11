import React from 'react';
import {withRouter} from 'react-router';
import moment from 'moment';
import AppointmentForm from './AppointmentForm';

function AppointmentList(props){
  const {appointments, cancelAppointment, populateForm, getInfoAppointment} = props
  return(
    <div className="Appointment">
     <p className="you-have-appointments"> You have {appointments.length} appointments comming up </p>
      <div className="consultList">
       {appointments.map(appointment => (
        <div className="eachConsult" key={appointment.id}>
          <img className="therapistImg" src={appointment.therapist_image} alt="therapist-img"/>
          <p id="app-info">Dr. {appointment.therapist_first_name} {appointment.therapist_last_name}</p>
          <p id="app-info">Appointment Date: <span>{moment(appointment.date).format("MMM Do YYYY")}</span></p>
          <p id="app-info">Appointment Time: <span>{appointment.time}</span></p>
          <button className="cancel-app-button" onClick={(props) => (cancelAppointment(appointment.id))}> Cancel Appointment </button>
          <button className="reschedule-app-button" onClick={(props) => (populateForm(appointment))}>Reschedule Appointment</button>
        </div>
      )
      )}
      <div className="calendar-form">
        <AppointmentForm handleChange={props.handleChange} handleCalendar={props.handleCalendar} handleSubmit={props.rescheduleAppointment} time={props.time} modalAppointment={props.modalAppointment}/>
      </div>
      </div>


    </div>
  )
}
export default withRouter(AppointmentList);
