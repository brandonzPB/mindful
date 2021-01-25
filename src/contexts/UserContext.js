import React, { useReducer, createContext, useEffect } from 'react';
import userReducer from '../reducers/userReducer';
import userService from '../services/userService';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  // const [user, dispatch] = useReducer(userReducer, [], () => {
  //   const storedUser = localStorage.getItem('my-user');
  //   return storedUser
  //     ? JSON.parse(storedUser)
  //     : {};
  // });

  // useEffect(() => {
  //   localStorage.setItem('my-user', JSON.stringify(user));
  // }, [user]);

  const [user, dispatch] = useReducer(userReducer, {});

  const login = user => {
    userService.login(user)
      .then(res => {
        console.log('res', res);
        
        dispatch({ type: 'LOG_IN', user: {
          name: res.name,
          email: res.email,
          entries: res.entries,
          id: res.id,
          _id: res._id,
          accessToken: res.accessToken
        }});

        return res;
      })
      .catch(err => console.error(err));
  }

  const logout = () => {
    dispatch({ type: 'LOG_OUT' });
    localStorage.removeItem('my-user');
  }

  return (
    <UserContext.Provider value={{ user, dispatch, login, logout }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
