import React from 'react';

function ContactMe(){
  return(
  <form className="form-contact-me" action="https://formspree.io/annie.usa@outlook.com.tld" method="POST">
    <div className="form-contact-therapist">
      <input id="input-form-contact-therapist" placeholder="YOUR NAME" type="text" name="name"/>
      <input id="input-form-contact-therapist" placeholder="YOUR EMAIL" type="email" name="_replyto"/>
      <input id="input-form-contact-therapist" placeholder="SUBJECT" type="text" name="_replyto"/>
      <input id="send" type="submit" value="Send"/>
    </div>
      <div>
        <textarea id="textarea" placeholder="YOUR MESSAGE" name="message"/>
      </div>
  </form>
)}

export default ContactMe;
