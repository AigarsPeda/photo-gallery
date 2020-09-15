import React, { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { User } from "firebase";

interface ContextInterface {
  currentUser: undefined | User;
}

// what should be type of ContextInterface?
// @ts-ignore
export const AuthContext = React.createContext<ContextInterface>(undefined);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    projectFirestore.app.auth().onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : setCurrentUser(undefined);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
