import React from 'react';
import { withRouter } from 'react-router';
import UserHeader from './UserProfileComponents/UserHeader';

function TherapistList(props){
  const {therapists, getTherapist} = props
  return(
    <div>
     <UserHeader />
      <div className="therapistList">
       <br/>
       {therapists.map(therapist => (
        <div className="therapistInfo" key={therapist.id}>
          <img className="therapist-img" src={therapist.therapist_image} alt="therapist-img" />
          <div className="name-location-specialty">
            <p className="therapist-list-info">Dr. {therapist.therapist_first_name} {therapist.therapist_last_name}</p> <br/>
            <p className="therapist-list-info">Location: <span>{therapist.location}</span></p>
            <p id="therapist-info">Skype: <span>{therapist.therapist_skype}</span></p>
            <button className="more-about-professional" onClick={(props) => getTherapist(therapist.id)}> More About This Professional</button>
          </div>
        </div>
      ))}
      </div>
    </div>
 )
}

export default withRouter(TherapistList);
