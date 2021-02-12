import React, { useState, useReducer, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('my-user', JSON.stringify(user));
  }, [user]);

  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys]) => keys)

          // handle forward event
          setDest('dashboard');
        } else {
          setLocationKeys((keys) => [ location.key, ...keys ]);

          // handle back event
          setDest('dashboard');
        }
      }
    });
  }, [locationKeys]);

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
          password: res.password,
          _id: res._id,
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

  const updateEntries = () => {
    userService.completeEntry(user, user._id, user.accessToken)
      .then(res => res)
      .catch(err => console.error(err));
  }

  const logout = () => {
    dispatch({ type: 'LOG_OUT' });

    localStorage.removeItem('my-user');
  }

  const removeUserOnReject = userObject => {
    userService.removeUserOnReject(userObject, user.createToken);

    logout();
  }

  const removeUser = () => {
    userService.removeUser(user, user.accessToken);

    logout();
  }

  return (
    <UserContext.Provider value={{ 
        user, dispatch, 
        link, setLink, 
        setDest, 
        createUser,
        login, logout,
        updateEntries, 
        removeUserOnReject,
        removeUser,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
