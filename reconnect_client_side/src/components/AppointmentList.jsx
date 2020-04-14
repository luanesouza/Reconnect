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
    <main>
      <section className="AppointmentList">
        <p> You have {appointments.length} appointments comming up </p>
        { myAppointments }
      </section>
      {
        props.modalAppointment
        ?
        <section className="calendar-form">
        <AppointmentForm handleChange={props.handleChange} handleCalendar={props.handleCalendar} handleSubmit={props.rescheduleAppointment} time={props.time} modalAppointment={props.modalAppointment}/>
        </section>
        :
        null
      }
    </main>
  )
}
export default withRouter(AppointmentList);
