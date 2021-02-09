import axios from 'axios';
const baseUrl = 'dashboard/user';

// CHECK IF USER EXISTS
const check = (userObject) => {
  const req = axios.post(`${baseUrl}/check`, userObject);

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// CREATE USER
const create = userObject => {
  const req = axios.post(`${baseUrl}/create`, userObject);

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// LOGIN
const login = userObject => {
  const req = axios.post(`${baseUrl}/login`, userObject);

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// GET USER INFO (not yet used)
const getUserInfo = (userId, token) => {
  const req = axios.get(`${baseUrl}/${userId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// COMPLETE ENTRY
const completeEntry = (userObject, userId, token) => {
  const req = axios.put(`${baseUrl}/${userId}/entry`, userObject, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// DELETE USER ON POLICY REJECTION
const removeUserOnReject = (userObject, token) => {
  const req = axios.delete(`${baseUrl}/${userObject._id}/reject`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// DELETE USER
const removeUser = (userObject, token) => {
  const req = axios.delete(`${baseUrl}/${userObject._id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
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
  removeUserOnReject,
  removeUser
}
