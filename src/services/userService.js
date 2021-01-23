import axios from 'axios';
const baseUrl = 'http://localhost:3011/dashboard/user';

const signup = (name) => {
  const req = axios.post(`${baseUrl}/`)
}

export default {
  signup,
}
