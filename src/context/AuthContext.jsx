import React, { createContext, useContext, useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser({ ...user, isAdmin: user.email === "admin@admin.com" });
  };

  const isAdmin = () => {
    return user && user.isAdmin;
  };

  const logout = async () => {
    setUser(null);
    try {
      await signOut(auth);
      return Promise.resolve(true);
    } catch (error) {
      return Promise.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
