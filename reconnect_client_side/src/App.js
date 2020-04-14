import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import HomePage from './components/HomePage';
import UserLoginForm from './components/UserLoginForm';
import { registerUser,
        loginUser,
        getTherapists,
        getOneTherapist,
        getUserAppointments,
        createUserAppointment,
        editUserAppointment,
        deleteUserAppointment, } from './services/users';
import UserProfile from './components/UserProfile'
import TherapistList from './components/TherapistList'
import TherapistProfile from './components/TherapistProfile'
import Modal from './components/Modal';
import AppointmentForm from './components/AppointmentForm';
import UserRegisterForm from './components/UserRegisterForm';


class App extends Component {
  state = {
    therapist: '',
    appointments: [],
    therapists: [],
    id: '',
    date: new Date(),
    time: '',
    therapist_id:'',
    therapist_image: '',
    therapist_last_name: '',
    therapist_first_name: '',
    education: '',
    specialty: '',
    user_id: 1,
    user_first_name: '',
    user_last_name: '',
    user_email: '',
    password: '',
    modalOpen: false,
    modalAppointment: false,
    apiTherapists: ''
  }


  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  handleLogout = (e) => {
  e.preventDefault();
  this.setState({
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      password: ''
  })
  this.props.history.push('/');
  }

  handleChange = (e)  => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  handleRegister = async (ev)  => {
    ev.preventDefault();
    const { user_first_name, user_last_name, user_email, password } = this.state
    if ( user_first_name && user_last_name
      && user_email && password ) {
      try {
        const newUser = {
          user_first_name: this.state.user_first_name,
          user_last_name: this.state.user_last_name,
          user_email: this.state.user_email,
          password: this.state.password
        }
        const data = await registerUser(newUser);
        console.log(this.state);
        console.log(data);
        this.setState({
            user_first_name: '',
            user_last_name: '',
            user_email: '',
            password: ''
        })
        this.props.history.push(`/profile`);
      } catch (e) {
        console.log(e, 'Something went wrong...');
      }
    } else {
      console.log('please fill out form');
      // logic works to not allow partially filled out forms to dispatch server call
      // need to know conditional render "please fill out form" as html if failure
    }
  };

  handleLogin = async (ev)  => {
    ev.preventDefault();
    const { user_email, password } = this.state;
    if (user_email && password) {
      try {
        const resp = await loginUser(this.state)
        if(resp) {
          console.log(resp);
          this.setState({
              user_email: '',
              password:''
          })
          this.props.history.push(`/profile`);
        } else {
          console.log('wrong username or password');
          // this needs user prompt so they can understand why login failed
        }
      } catch(e) {
        console.log(e, 'Someting went wrong...');
      }
    } else {
      console.log('please put both a username and password');
    };
  };

  getAppointments = async () => {
    const appointments = await getUserAppointments()

    this.setState({
      appointments
    })
  }

  getAllTherapists = async () => {
    const therapists = await getTherapists()

    this.setState({
      therapists
    })
  }

  getTherapist = async (therapistId) => {
    const therapist = await getOneTherapist(therapistId)
    console.log(therapist);
    this.setState({
      therapist,
      therapist_id:therapist.id,
      therapist_image: therapist.therapist_image,
      therapist_first_name: therapist.therapist_first_name,
      therapist_last_name: therapist.therapist_last_name,
      specialty: therapist.specialty,
      education: therapist.education
    })
    this.props.history.push('/therapist');
  }

  getInfoAppointment = async () => {
    this.setState(prevState => ({
      modalAppointment:!prevState.modalAppointment

    }));
  };

  createAppointment = async (e) => {
    e.preventDefault();
    const data = {
      date: this.state.date,
      time: this.state.time,
      therapist_id:this.state.therapist_id,
      therapist_image: this.state.therapist_image ,
      user_id: 1,
      therapist_first_name: this.state.therapist_first_name,
      therapist_last_name: this.state.therapist_last_name
    }
    const appointment = await createUserAppointment(data)
    this.setState({
      date: '',
      time: ''
    })
    this.props.history.push('/profile')
    const appointments = await getUserAppointments();
    this.setState({
      appointments,
      modalAppointment: false,
      date: '',
      time: '',
      therapist_id:'',
      therapist_image: '',
      therapist_first_name: '',
      therapist_last_name: '',
    })
  }

  cancelAppointment = async (appointmentId) => {
    try{
      const resp = await deleteUserAppointment(appointmentId)
      const appointments = await getUserAppointments();

      this.setState({
        appointments
      })
    }catch(e){
      console.error(e.message);
    }
  }

  populateForm = async (appointment) => {
    this.setState(prevState => ({
      modalAppointment: !prevState.modalAppointment
    }))
    console.log(this.state.modalAppointment);
    console.log(appointment);
    try{
    this.setState({
      date: appointment.date,
      time: appointment.time,
      id: appointment.id

    })
    }catch(e){
      console.error(e.message);
    }
  }

  rescheduleAppointment = async (e) => {
    e.preventDefault();
    try{
      const data = {
        date: this.state.date,
        time: this.state.time,
      }
      await editUserAppointment(this.state.id, data)
  } catch(e){
    console.log(e.message);
  }
  this.setState({
    time: '',
    modalAppointment: false
  })
  const appointments = await getUserAppointments();
    const newAppointment = appointments.sort();
    console.log(appointments);
    this.setState({
      appointments: newAppointment
  })
}

  handleRedirect = () => {
    console.log('clicked');
    this.setState({
      time: '',
      therapist_id: '',
      date: '',
      modalAppointment: false
    })
    this.props.history.push('/therapists')
  }

  handleCalendar = (date) => {
    this.setState(prevState => ({
        ...prevState,
        date
    }))
  }

  componentDidMount = async () => {
    await this.getAppointments();
    await this.getAllTherapists();
  }

  render() {
    return (
      <div className="App">
        <Route exact path ='/' render={(props) => (
            <HomePage { ...props} />
        )} />

        <Route exact path='/scheduleAppointment' render={(props) => (
          <div>
            <AppointmentForm
            {...props}
            handleChange={this.handleChange}
            handleSubmit={this.createAppointment}
            date={this.state.date}
            time={this.state.time}
            handleCalendar={this.handleCalendar}/>
          </div>
        )} />

        <Route exact path ='/signup' render={(props) => (
          <div>
            <UserRegisterForm
            {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleRegister}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              email={this.state.email}
              password={this.state.password}
              closeModal={this.toggleModal}/>
          </div>
        )} />

        <Route exact path='/login' render={(props) => (
          <div>
            <UserLoginForm
              {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleLogin}
              email={this.state.email}
              password={this.state.password}
              closeModal={this.toggleModal}
              isOpen={this.state.modalOpen}/>
          </div>
        )} />

        <Route exact path='/profile' render={(props) => (
          <div>
            <UserProfile
            appointments={this.state.appointments}
            cancelAppointment={this.cancelAppointment}
            populateForm={this.populateForm}
            date={this.state.date}
            time={this.state.time}
            rescheduleAppointment={this.rescheduleAppointment}
            modalAppointment={this.state.modalAppointment}
            handleChange={this.handleChange}
            handleRedirect={this.handleRedirect}/>
          </div>
        )}/>
        <Route exact path='/therapists' render={(props) => (
          <div>
            <TherapistList
            getTherapist={this.getTherapist}
            therapist={this.state.therapist}
            therapists={this.state.therapists} />
          </div>
        )} />
        <Route exact path='/therapist' render={(props) => (
          <div>
            <TherapistProfile
            therapist={this.state.therapist}
            getInfoAppointment={this.getInfoAppointment}
            handleChange={this.handleChange}
            handleSubmit={this.createAppointment}
            date={this.state.date}
            time={this.state.time}
            handleCalendar={this.handleCalendar}
            modalAppointment={this.state.modalAppointment}/>
          </div>
        )} />
        <Modal
          closeModal={this.toggleModal}
          isOpen={this.state.modalOpen} />
      </div>
    );
  }
}

export default withRouter (App);
