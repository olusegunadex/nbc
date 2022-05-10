//@ts-check

import { createContext, useState } from "react";

export const UserContext = createContext({
  //these are the default values, useful for autocomplete also
  state: null,
  login: null,
  signup: null,
  forgotPassword: null
});

export function UserContextProvider({ children }) {
  // testing
  const [state, setState] = useState("NBC Testing Transmssion");
  return (
    <UserContext.Provider
      // @ts-ignore
      value={{ state }}
    >
      {children}
    </UserContext.Provider>
  );
}
