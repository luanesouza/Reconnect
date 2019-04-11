import React from 'react';

function Footer(){
  return(
      <div className="Footer">
        <p className="connect-with-us">Connect with us: </p>
        <div className="socialMediaIcons">
          <img className="icons" src={"https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"} alt="facebook-icon"/>
          <img className="icons" src={"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/twitter-512.png"} alt="twitter-icon"/>
          <img className="icons" src={"https://www.freeiconspng.com/uploads/google-plus-icon--circle-iconset--martz90-20.png"} alt="gmail-icon"/>
          <img className="icons" src={"https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-512.png"} alt="instagram-icon"/>
          <img className="icons" src={"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/youtube-512.png"} alt="youtube-icon"/>
        </div>
        <p className="copyright-FestPlan"> 	&#169; Copyright Annie Souza 2019 </p>
      </div>
  )};
export default Footer;
