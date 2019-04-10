import axios from 'axios';
import { api, updateToken } from './api-helper';


const registerUser = async (data) => {
  try {
    const loginData = await api.post(`${BASE_URL}/festivals/1/users`, data);
    updateToken(loginData.data.token);
    return loginData.data
  } catch (e) {
    console.log(e);
  }
}
