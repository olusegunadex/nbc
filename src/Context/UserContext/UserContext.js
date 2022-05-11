//@ts-check

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Firebase/Firebase";
export const UserContext = createContext({
  //these are the default values, useful for autocomplete also
  authData: null,
  setAuthData: null,
  login: null,
  signup: null,
  forgotPassword: null
});

export function UserContextProvider({ children }) {
  // authIsReady why is that useful ?
  /**
   * generally authentication takes time to process , prommises and during this period users can access
   * any protected page, that is why we need a state to check if firebase or nodejs or anything were using for auth
   * in our case we need to check if firebase auth is fully loaded before we render anything on the screen
   *
   * THINGS WE NEED
   * an error state to show user if there is an error during signup or login
   * - make auth ready so app can show content instaed of loading
   */
  const [authData, setAuthData] = useState({ user: null, authIsReady: false });
  const [error, setError] = useState(null /** no error by default */);

  // code we need to
  const signup = (/** @type {string} */ email, /** @type {any} */ password) => {
    //  sign up code
  };
  const login = (/** @type {string} */ email, /** @type {any} */ password) => {
    //  login  code
  };
  const forgotPassword = (/** @type {string} */ email) => {
    //  forgotPassword code
  };
  // make auth ready
  useEffect(() => {
    // what we need
    // on authStateChange from firebase
    // we need auth that we exported from firebasse config
    const subscriber = onAuthStateChanged(auth, (response) => {
      setAuthData({ user: response, authIsReady: true });
    });
    return subscriber;
    // clen up func so firebase can check for auth when app mounts and unmount
  }, []);

  return (
    <UserContext.Provider
      // @ts-ignore
      value={{ error, authData, setAuthData }}
    >
      {children}
    </UserContext.Provider>
  );
}
