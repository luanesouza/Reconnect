import React from 'react';
import moment from 'moment';


export default function Appointment({appointment, populateForm, cancelAppointment}) {
  console.log(appointment);
  return (
    <div className="appointment-card" key={appointment.id}>
      <img src='https://as2.ftcdn.net/jpg/02/85/48/33/500_F_285483373_SFvWkkyXvib9uKSysjFSmtC7GC878cjR.jpg' alt="therapist-img"/>
      <section className='doctor-info'>
        <p>Dr. {appointment.therapist_first_name} {appointment.therapist_last_name}</p>
        <p>Appointment Date: <span>{moment(appointment.date).format("MMM Do YYYY")}</span></p>
        <p>Appointment Time: <span>{appointment.time}</span></p>
      </section>
      <button className="cancel-app-button" onClick={(props) => (cancelAppointment(appointment.id))}> Cancel Appointment </button>
      <button className="reschedule-app-button" onClick={(props) => (populateForm(appointment))}>Reschedule Appointment</button>
    </div>
  )
}
