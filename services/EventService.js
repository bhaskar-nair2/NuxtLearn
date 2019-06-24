import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://172.17.0.3:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  }
};
