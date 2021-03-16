import React, {createContext, useState} from 'react';
import {baseURL} from '../Constants';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signIn: async (username, password, button) => {
          var myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');
          var raw = JSON.stringify({username: username, password: password});
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
          };
          try {
            await fetch(`${baseURL}/student_login/`, requestOptions)
              .then((response) => response.json())
              .then((result) => {
                if (result.Message === 'Internal Server Error') {
                  console.log('Error occurred');
                  Alert.alert('Login Failed', 'Invalid username or password', [
                    {text: 'OK', onPress: () => console.log('okay')},
                  ]);
                } else {
                  setCurrentUser(result);
                }
              });
          } catch (E) {
            console.warn(E);
          }
        },

        signUp: () => {},

        signOut: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
