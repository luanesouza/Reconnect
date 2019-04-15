import axios from 'axios';

const api = axios.create({
  baseURL: 'https://git.heroku.com/dry-oasis-20600.git'
});

const updateToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export {
    api,
    updateToken
}
