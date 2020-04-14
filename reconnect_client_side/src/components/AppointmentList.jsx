import React from 'react';
import {withRouter} from 'react-router';
import AppointmentForm from './AppointmentForm';
import Appointment from './Appointment';

function AppointmentList(props){
  const {appointments, cancelAppointment, populateForm, getInfoAppointment} = props


  let myAppointments = appointments.map(appointment => (
      <Appointment
       populateForm={populateForm}
       cancelAppointment={cancelAppointment}
       appointment={appointment}
       />))

  return(
    <section className="AppointmentList">
      <p> You have {appointments.length} appointments comming up </p>
      <section>
       { myAppointments }
      <section className="calendar-form">
        <AppointmentForm handleChange={props.handleChange} handleCalendar={props.handleCalendar} handleSubmit={props.rescheduleAppointment} time={props.time} modalAppointment={props.modalAppointment}/>
      </section>
      </section>


    </section>
  )
}
export default withRouter(AppointmentList);
