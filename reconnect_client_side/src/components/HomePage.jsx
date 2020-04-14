import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  console.log(props);
  return(

    <main className='HomePage'>
      <section className='homepage-image-text'>
        <img src='https://image.flaticon.com/icons/svg/1491/1491373.svg' alt='logo'/>
        <span id='re'>Re</span><span id='connect'>connect</span>
      </section>

      <button onClick={(e) => {e.preventDefault(); props.history.push('/signup')}}> Talk to a Therapist </button>
      <a href='/login'> Already Have An Account? Login </a>

    </main>
  )
};

export default HomePage;
