import axios from 'axios';
const BASE_URL = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=';
const API_KEY = '8e1dacf0271d976a30e8997b901ec4a3';

const getAPITherapists = async () => {
  try{
    const resp = await axios.get(`${BASE_URL}${API_KEY}`)
    console.log(resp.data.data)
    return resp.data.data
  }catch(e){
    console.error(e.message);
  }
}

export {
  getAPITherapists
}
