import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({children}) => {
  const [userToken, setUserToken] = useState('');
  const [auth, setAuth] = useState('');

  const Auth = useMemo(() => {
    return {setAuth, handlingLogin, handlingLogout};
  }, [auth]);
  const login = async () => {
    try {
      const token = 'user123';
      await AsyncStorage.setItem('userToken', token);
      console.log('Logging in');
      setUserToken(token);
    } catch (err) {
      console.log('Error Logging In ', err);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken('');
      console.log('Logout pressed');
    } catch (err) {
      console.log('Error Logging Out ', err);
    }
  };
  function handlingLogin() {
    console.log("Logging in")
    login()
  }
  function handlingLogout() {
    console.log("Logging out")
    logout()
  }
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
