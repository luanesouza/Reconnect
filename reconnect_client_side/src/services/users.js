
import { api, updateToken } from './api-helper';

const loginUser = async (data) => {
  try {
    const loginData = await api.post(`/login`, data);
    // updateToken(loginData.data.token);
    return loginData.data;
  } catch (e) {
    console.log(e);
    return false
  }
}

const getTherapists = async () => {
  try {
    const allTherapists = await api('/therapists')
    return allTherapists.data;
  }catch(e){
    console.error(e.message);
  }
}

const getOneTherapist = async (therapistId) => {
  try {
    const therapist = await api(`therapists/${therapistId}`)
    return therapist.data
  }catch(e){
    console.error(e.message);
  }
}

const registerUser = async (data) => {
  try{
    const resp = await api.post(`/users`, data);
    console.log(resp.data);
    return resp.data;
  }catch(e){
    console.error(e.message);
  }
};
// const getTherapists = async () => {
//   try {
//     const resp = await api.get(`/therapists`)
//     return resp.data;
//   } catch(e) {
//     console.log(e);
//     return false
//   }
// }

const getUserAppointments = async () => {
  try {
    const resp = await api.get(`/users/1/appointments`)
    return resp.data;
  } catch (e) {
    console.error(e.message);
  }
}

const createUserAppointment = async (appointment) => {
  console.log(appointment);
  try {
    const resp = await api.post(`/users/1/appointments`, appointment)
    return resp.data
  } catch(e) {
    console.log(e);
    return false;
  }
}

const editUserAppointment = async (appointmentId, appointment) => {
  try {
    const resp = await api.put(`/users/1/appointments/${appointmentId}`, appointment);
    return resp.data
  } catch(e) {
    console.log(e);
    return false;
  }
}

const deleteUserAppointment = async (appointmentId) => {
  try {
    const resp = await api.delete(`/users/1/appointments/${appointmentId}`)
    return resp.data
  } catch(e) {
    console.log(e);
    return false
  }
}


export {
  registerUser,
  loginUser,
  getTherapists,
  getOneTherapist,
  getUserAppointments,
  createUserAppointment,
  editUserAppointment,
  deleteUserAppointment,
}
