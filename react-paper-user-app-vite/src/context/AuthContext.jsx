import { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import inMemoryJWT from "../services/inMemoryJWT";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isAppReady, setIsAppReady] = useState(true);

  useEffect(() => { 
    if(isUserLogged) {
      AuthService.refresh().then((res) => {
        const {accessToken, accessTokenExpiration} = res.data;
        inMemoryJWT.setToken(accessToken, accessTokenExpiration);

        setIsAppReady(true);
        setIsUserLogged(true);
    }).catch((error) => {
      console.log(error);
      setIsAppReady(true);
      setIsUserLogged(false);
  })}}, [])

  return (
    <AuthContext.Provider
      value={{
        isUserLogged, 
        isAppReady,
        setIsUserLogged
      }}
    >
      {isAppReady ? (children) : (<div>ждем</div>)}
    </AuthContext.Provider>
  );
};

export default AuthProvider;