import axios from 'axios';
const baseUrl = '/dashboard/user';

const check = (userObject) => {
  const req = axios.post(`${baseUrl}/check`, userObject);

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

const create = userObject => {
  const req = axios.post(`${baseUrl}/create`, userObject);

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

const login = userObject => {
  const req = axios.post(`${baseUrl}/login`, userObject);

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

const getUserInfo = (userId, token) => {
  const req = axios.get(`${baseUrl}/${userId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

const completeEntry = (userObject, userId, token) => {
  const req = axios.put(`${baseUrl}/${userId}/entry`, userObject, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

const remove = userObject => {
  const req = axios.delete(`${baseUrl}`, {
    params: userObject,
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

export default {
  check,
  create,
  login,
  getUserInfo,
  completeEntry,
  remove
}
