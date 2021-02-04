import React, { useState, useReducer, createContext, useEffect } from 'react';
import userReducer from '../reducers/userReducer';
import userService from '../services/userService';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, [], () => {
    const storedUser = localStorage.getItem('my-user');
    return storedUser
      ? JSON.parse(storedUser)
      : {};
  });

  useEffect(() => {
    localStorage.setItem('my-user', JSON.stringify(user));
  }, [user]);

  const [link, setLink] = useState({ dest: '' });

  const setDest = req => {
    setLink({
      ...link,
      dest: req
    });
  }

  const createUser = async (userObj) => {
    await userService.create(userObj)
      .then(res => {
        console.log('res', res);

        dispatch({ type: 'CREATE_USER', user: {
          email: res.email,
          createToken: res.createToken
        }});

        return res;
      })
      .catch(err => console.error(err));
  }

  const login = user => {
    userService.login(user)
      .then(res => {
        console.log('res', res);

        const whiteSpaceIndex = res.name.indexOf(' ');

        let firstName = '';
        for (let i = 0; i < whiteSpaceIndex; i++) {
          firstName += res.name[i];
        }
        
        dispatch({ type: 'LOG_IN', user: {
          name: res.name,
          firstName,
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

  const updateEntries = () => {
    userService.completeEntry(user, user._id, user.accessToken)
      .then(res => res)
      .catch(err => console.error(err));
  }

  const logout = () => {
    dispatch({ type: 'LOG_OUT' });
    localStorage.removeItem('my-user');
  }

  const removeUser = userObject => {
    localStorage.removeItem('my-user');
    userService.remove(userObject, user.createToken);
  }

  return (
    <UserContext.Provider value={{ 
        user, dispatch, 
        link, setLink, 
        setDest, 
        createUser,
        login, logout,
        updateEntries, 
        removeUser,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
