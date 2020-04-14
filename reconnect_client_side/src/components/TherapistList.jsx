import React from 'react';
import { withRouter } from 'react-router';
import UserHeader from './UserHeader';
import Therapist from './Therapist';

function TherapistList(props){
  const {therapists, getTherapist} = props
  return(
    <div>
     <UserHeader />
      <div className="therapistList">
       <br/>
       {therapists.map(therapist => (
        <Therapist getTherapist={getTherapist} therapist={therapist}/>
      ))}
      </div>
    </div>
 )
}

export default withRouter(TherapistList);
