import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser({ ...user, isAdmin: user.name === "admin" });
  };

  const isAdmin = () => {
    return user && user.isAdmin;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };

