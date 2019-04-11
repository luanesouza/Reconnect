import React from 'react';
import { withRouter } from 'react-router';
import Calendar from 'react-calendar';

function AppointmentForm(props){
  if (props.modalAppointment === false) {
    return null;
  }
  return(
  <form onSubmit={props.handleSubmit}>
   <Calendar onChange={props.handleCalendar} value={props.date}/>
     <div className="calendar-input">
        <input
        className="register-input"
        placeholder="TIME"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        name="time"
        value={props.time} />
      </div>
     <button className="schedule-button" onClick={props.handleSubmit}> Schedule </button>
   </form>
 )
}
export default withRouter(AppointmentForm);
